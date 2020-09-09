import { Migration } from '@mikro-orm/migrations';

export class Migration20200909131423 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "profile_img_src" varchar(255) null, "address" text null, "email" text null, "age" int4 null, "interests" text[] null, "provider" text null, "extra" jsonb null);');

    this.addSql('create table "project" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "location" text not null, "tags" text[] null, "evaluation" text[] null, "description" varchar(255) null, "max_number" int4 null, "response_rate" int4 null, "extra" jsonb null);');

    this.addSql('create table "user_project" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "confirmed" text not null, "score" text[] null, "extra" jsonb null);');

    this.addSql('create table "category" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "extra" jsonb null);');

    this.addSql('create table "notification" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "contents" varchar(255) null, "read" bool not null, "extra" jsonb null);');
  }

}
