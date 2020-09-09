import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class Notification {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ nullable: true })
  contents?: string;

  @Property()
  read!: boolean;

  @Property({ nullable: true })
  extra?: object;
}
