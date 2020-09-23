import "dotenv/config";

import { MikroORM } from "@mikro-orm/core";
import path from "path";

import User from "./entities/User";
import Project from "./entities/Project";
import UserProject from "./entities/UserProject";
import Category from "./entities/Category";
import Notification from "./entities/Notification";
import { IS_PRODUCTION } from "./constants";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [User, Project, UserProject, Category, Notification],
  host: process.env.DB_URI,
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  debug: !IS_PRODUCTION,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
