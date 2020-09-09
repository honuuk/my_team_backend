import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

enum Confirmed {
  passed,
  rejected,
  undefined,
};

@Entity()
export default class UserProject {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  @Property()
  confirmed!: Confirmed;
  
  @Property()
  score?: number[];

  @Property()
  extra?: object;
}
