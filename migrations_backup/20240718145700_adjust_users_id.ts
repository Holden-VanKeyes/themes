import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  knex.schema.alterTable('users', function (table) {
    table.dropTimestamps()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('adjust_users_id')
}
