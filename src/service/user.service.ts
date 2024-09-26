import { IUserDTO } from "dtos/user.dto.js";
import { UserRepository } from "infraestructure/repositories/user.repository";
import { IUser } from "interfaces/user.js";
import * as bcrypt from "bcrypt";

export class UserService {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async findUserByEmail(email: string): Promise<IUserDTO | null> {
    return this.userRepository.findUserByEmail(email);
  }

  public async create(user: IUser): Promise<IUserDTO> {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    const now = new Date();
    const verificationExpires = new Date(now.getTime() + 30 * 60000);

    user.verificationCode = verificationCode;
    user.verificationExpires = verificationExpires;

    return this.userRepository.create(user);
  }
}
