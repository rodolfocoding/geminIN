export interface IUser {
  email: string;
  completeName: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  emailVerified?: boolean;
  verificationCode?: number;
  verificationExpires?: Date;
}
