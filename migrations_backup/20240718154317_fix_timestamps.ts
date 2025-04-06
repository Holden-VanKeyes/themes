import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', function (table) {
    table.timestamp('created at').defaultTo(knex.fn.now())
    table.timestamp('updated at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {}
