import { Column, Entity } from "typeorm";
import { BaseEntity } from "@entities/base.entity";

@Entity()
export class Test extends BaseEntity {
  constructor(test?: Test) {
    super();
    Object.assign(this, test);
  }
  @Column()
  name: string;
}
