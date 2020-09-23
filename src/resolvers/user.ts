import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { GraphQLJSONObject } from "graphql-type-json";

import { MyContext, Provider } from "../types";
import User from "../entities/User";

@Resolver()
export default class UserResolver {
  @Query(() => String)
  hello() {
    return "hello world";
  }

  @Mutation(() => User)
  async createUser(
    @Ctx() { em }: MyContext,
    @Arg("name") name: string,
    @Arg("profileImgSrc", () => String, { nullable: true })
    profileImgSrc?: string,
    @Arg("address", { nullable: true }) address?: string,
    @Arg("email", { nullable: true }) email?: string,
    @Arg("age", { nullable: true }) age?: number,
    @Arg("provider", { nullable: true }) provider?: Provider,
    @Arg("extra", () => GraphQLJSONObject, { nullable: true }) extra?: Object
  ): Promise<User> {
    const user = em.create(User, {
      name,
      profileImgSrc,
      address,
      email,
      age,
      provider,
      extra,
    });
    await em.persistAndFlush(user);

    return user;
  }
}
