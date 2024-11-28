import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // return knex.schema
  //   .dropTable('posts')
  //   .then(() => knex.schema.renameTable('users', 'test_table'))
  //   .then(() => knex.schema.renameTable('marketplace_users', 'users'))
}

export async function down(knex: Knex): Promise<void> {}
