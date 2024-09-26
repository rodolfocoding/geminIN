import { IUserDTO } from "dtos/user.dto";
import { IUser } from "./user";

export interface IUserService {
  create(data: IUser): Promise<any>;
  findUserByEmail(email: string): Promise<IUserDTO | null>;
}
