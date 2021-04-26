import axios, { AxiosInstance } from "axios";
import state from "@state/index";

interface IResponseData<T> {
  data: T;
  status: number;
}

export class ApiError extends Error {
  status?: number;
  details?: Record<string, any>;
  constructor(message: string, status?: number, details?: Record<string, any>) {
    super(message);
    this.status = status;
    this.details = details;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export abstract class ApiCaller {
  protected axiosInstance: AxiosInstance;
  private baseUrl: string;
  private token: string | null;

  constructor(baseUrl: string) {
    this.token = state.getState().auth.token;
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({ baseURL: this.baseUrl });
    this.subscribeToReduxState();
  }

  protected async get<T>(path: string): Promise<IResponseData<T>> {
    const result = await this.makeSafeRequest(async () => {
      const response = await this.axiosInstance.get<T>(path);
      return { data: response.data, status: response.status };
    });
    return result;
  }

  protected async post<T>(path: string, data?: Record<string, any>): Promise<IResponseData<T>> {
    const result = await this.makeSafeRequest(async () => {
      const response = await this.axiosInstance.post<T>(path, data);
      return { data: response.data, status: response.status };
    });
    return result;
  }

  protected async delete<T>(path: string): Promise<IResponseData<T>> {
    const result = await this.makeSafeRequest(async () => {
      const response = await this.axiosInstance.delete<T>(path);
      return { data: response.data, status: response.status };
    });
    return result;
  }

  protected async put<T>(path: string, data?: Record<string, any>): Promise<IResponseData<T>> {
    const result = await this.makeSafeRequest(async () => {
      const response = await this.axiosInstance.put<T>(path, data);
      return { data: response.data, status: response.status };
    });
    return result;
  }

  private subscribeToReduxState() {
    state.subscribe(() => {
      if (this.token !== state.getState().auth.token) {
        this.token = state.getState().auth.token;
        if (this.token) {
          this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            headers: { authorization: `Bearer ${this.token}` },
          });
        } else {
          this.axiosInstance = axios.create({ baseURL: this.baseUrl });
        }
      }
    });
  }

  private async makeSafeRequest<T>(callback: () => Promise<T>): Promise<T> {
    try {
      const response = await callback();
      return response;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw new ApiError(err.message, err.response?.status, err.response?.data);
      }
      throw err;
    }
  }

  isApiError(err: any): err is ApiError {
    return err instanceof ApiError;
  }
}
