import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  knex.schema.alterTable('users', function (table) {
    table.dropColumn('email')
  })
}

export async function down(knex: Knex): Promise<void> {}
