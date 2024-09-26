import { Request, Response } from "express";
import { IUserService } from "interfaces/user-service";
import { IUser } from "interfaces/user";
import { validateEmail } from "utils/validate-email";

export class UserController {
  private readonly userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  public async create(req: Request, res: Response): Promise<any> {
    try {
      const {
        email,
        password,
        completeName,
      }: { email: string; password: string; completeName: string } = req.body;

      if (!email || !password || !completeName) {
        return res
          .status(400)
          .json({
            message: "Campos obrigatórios: email, senha e nome completo.",
          });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({ message: "Email inválido." });
      }

      const existingUser: IUser | null = await this.userService.findUserByEmail(
        email
      );

      if (existingUser) {
        return res.status(400).json({ message: "Email já está em uso." });
      }

      await this.userService.create({ email, password, completeName });

      return res.status(201).json({ message: "Usuário criado com sucesso." });
    } catch (err) {
      console.error("Erro ao criar usuário:", err);

      return res.status(500).json({
        message:
          "Erro ao criar usuário. Por favor, tente novamente mais tarde.",
        error: `${err}`,
      });
    }
  }
}
