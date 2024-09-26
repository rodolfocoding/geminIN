import { Repository } from "typeorm";
import { Test } from "@entities/test.entity";
import { AppDataSource } from "infraestructure/typeorm.config";

export class TestRepositor {
  protected repository: Repository<Test>;

  constructor() {
    this.repository = AppDataSource.getRepository(Test);
  }

  async teste() {}
}
