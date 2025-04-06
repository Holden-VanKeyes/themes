import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  knex.schema.alterTable('users', function (table) {
    return table.dropPrimary()
  })
  //   return knex.schema
  //     .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  //     .alterTable('users', function (table) {
  //       table

  //         .uuid('id', { primaryKey: true })
  //         .defaultTo(knex.raw('uuid_generate_v4()'))
  //         .alter()
  //     })
}

export async function down(knex: Knex): Promise<void> {}
