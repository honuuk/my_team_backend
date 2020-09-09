import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class Project {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'text' })
  name!: string;

  @Property({ type: 'text' })
  location?: string;

  @Property({ nullable: true })
  tags?: string[];

  @Property({ nullable: true })
  evaluation?: string[];

  @Property({ nullable: true })
  description?: string;

  @Property({ nullable: true })
  maxNumber?: number;

  @Property({ nullable: true })
  responseRate?: number;

  @Property({ nullable: true })
  extra?: object;
}
