import { GET } from "../app/api/users/route";
import { sampleUsers } from "SAMPLE_DATA";

export class UserService {
  getUsers() {
    return sampleUsers;
  }
}

const userService = new UserService();
export { userService };
