import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class Category {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  extra?: object;
}
