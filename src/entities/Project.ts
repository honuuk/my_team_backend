import { Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection } from "@mikro-orm/core";

@Entity()
export default class Project {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name!: string;

  @Property()
  location?: string;

  @Property()
  tags?: string[];

  @Property()
  evaluation?: string[];

  @Property()
  description?: number;

  @Property()
  maxNumber?: number;

  @Property()
  responseRate?: number;

  @Property()
  extra?: object;
}
