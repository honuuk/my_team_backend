import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { GraphQLJSONObject } from "graphql-type-json";
import { Field, ID, ObjectType } from "type-graphql";

import { Provider } from "/Users/jewookyoo/Projects/my_team_backend/src/types";

@ObjectType()
@Entity()
export default class User {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field(() => Date)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: "text" })
  name!: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  profileImgSrc?: string;

  @Field({ nullable: true })
  @Property({ nullable: true, type: "text" })
  address?: string;

  @Field({ nullable: true })
  @Property({ nullable: true, type: "text" })
  email?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  age?: number;

  @Field(() => Array(String), { nullable: true })
  @Property({ nullable: true })
  interests?: string[];

  @Field(() => String, { nullable: true })
  @Property({ nullable: true, type: "text" })
  provider?: Provider;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @Property({ nullable: true })
  extra?: object;
}
