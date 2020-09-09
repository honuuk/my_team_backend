import { Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection } from "@mikro-orm/core";

enum Provider {
  Google,
  Facebook,
  Naver,
};

@Entity()
export default class User {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name!: string;

  @Property()
  profileImgSrc?: string;

  @Property()
  address?: string;

  @Property()
  email?: string;

  @Property()
  age?: number;

  @Property()
  interests?: string[];

  @Property()
  provider?: Provider;

  @Property()
  extra?: object;
}
