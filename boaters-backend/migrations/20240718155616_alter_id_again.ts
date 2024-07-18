import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', function (table) {
    table.string('email').notNullable().alter()
  })
}

export async function down(knex: Knex): Promise<void> {}

// return knex.schema
// .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
// .alterTable('users', function (table) {
//   table
//     .uuid('id', { primaryKey: true })
//     .defaultTo(knex.raw('uuid_generate_v4()'))
// })
