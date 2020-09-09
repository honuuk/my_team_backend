import { MikroORM } from '@mikro-orm/core';
import { IS_PRODUCTION } from './constants';
import User from './entities/User';
import Project from './entities/Project';
import UserProject from './entities/UserProject';
import Category from './entities/Category';
import Notification from './entities/Notification';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [User, Project, UserProject, Category, Notification],
    host: 'jewook-test.c6lw735zy6ro.ap-northeast-2.rds.amazonaws.com',
    dbName: 'my_team',
    user: 'root',
    password: 'dnwnwjdqhrwk!',
    debug: !IS_PRODUCTION,
    type: 'postgresql',
  });
};

main();