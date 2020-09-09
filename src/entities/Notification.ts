import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class Notification {
  @PrimaryKey()
  id!: number;

  @Property()
  contents?: string;

  @Property()
  read!: boolean;

  @Property()
  extra?: object;
}
