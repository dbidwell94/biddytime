import { IUser } from "@state/types";
import { ApiCaller } from ".";

class UserApiClient extends ApiCaller {
  constructor() {
    super();
  }

  async getUserById(id: number) {
    const response = await this.get<IUser>(`/api/private/users/user/${id}`);
    return response;
  }
}

export default new UserApiClient();
