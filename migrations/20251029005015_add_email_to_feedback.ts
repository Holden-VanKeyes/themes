import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('feedback', function (table) {
    table.string('email').nullable().index()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('feedback', function (table) {
    table.dropColumn('email')
  })
}
