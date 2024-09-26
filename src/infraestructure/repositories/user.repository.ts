import { Repository } from "typeorm";
import { AppDataSource } from "infraestructure/typeorm.config";
import { User } from "@entities/user.entity";
import { IUser } from "interfaces/user";
import { IUserDTO } from "dtos/user.dto";

export class UserRepository {
  protected repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findUserByEmail(email: string): Promise<IUserDTO | null> {
    const user = await this.repository.findOne({ where: { email } });
    return user || null;
  }

  async create(user: IUser): Promise<any> {
    return this.repository.save(user);
  }
}
