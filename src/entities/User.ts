import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

enum Provider {
  Google,
  Facebook,
  Naver,
};

@Entity()
export default class User {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'text' })
  name!: string;

  @Property({ nullable: true })
  profileImgSrc?: string;

  @Property({ nullable: true,  type: 'text' })
  address?: string;

  @Property({ nullable: true, type: 'text' })
  email?: string;

  @Property({ nullable: true })
  age?: number;

  @Property({ nullable: true })
  interests?: string[];

  @Property({ nullable: true, type: 'text' })
  provider?: Provider;

  @Property({ nullable: true })
  extra?: object;
}
