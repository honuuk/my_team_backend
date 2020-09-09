import { MikroORM } from '@mikro-orm/core';
import mikroConfig from './mikro-orm.config';
// import User from './entities/User';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  
  // const user = orm.em.create(User, { name: 'jewook' });
  // await orm.em.persistAndFlush(user);
  // console.log('------------- sql 2 ----------------------');
  // await orm.em.nativeInsert(User, { name: 'jewook' });
};

main().catch(e => console.log(e));
