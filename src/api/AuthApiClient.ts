import { ApiCaller } from "@api/index";
import { IUser } from "@state/types";

interface ILoginResponse {
  user: IUser;
  token: string;
}

interface IUserRegisterBody {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class AuthApiClient extends ApiCaller {
  constructor() {
    super("http://localhost:7002");
  }

  async login(username: string, password: string) {
    const result = await this.post<ILoginResponse>("/api/users/login", { username, password });
    return result;
  }

  async register(body: IUserRegisterBody) {
    const result = await this.post<ILoginResponse>("/api/users/register", body);
    return result;
  }
}

export default new AuthApiClient();
