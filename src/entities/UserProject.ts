import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

enum Confirmed {
  passed,
  rejected,
  undefined,
};

@Entity()
export default class UserProject {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'text' })
  confirmed!: Confirmed;
  
  @Property({ nullable: true })
  score?: number[];

  @Property({ nullable: true })
  extra?: object;
}
