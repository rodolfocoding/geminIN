import { Column, Entity } from "typeorm";
import { BaseEntity } from "@entities/base.entity";

@Entity({ name: "users" })
export class User extends BaseEntity {
  constructor(user?: User) {
    super();
    Object.assign(this, user);
  }

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  completeName: string;

  @Column()
  emailVerified: boolean;

  @Column()
  verificationCode: number;

  @Column()
  verificationExpires: Date;
}
