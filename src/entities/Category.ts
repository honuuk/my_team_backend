import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class Category {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'text' })
  name!: string;

  @Property({ nullable: true })
  extra?: object;
}
