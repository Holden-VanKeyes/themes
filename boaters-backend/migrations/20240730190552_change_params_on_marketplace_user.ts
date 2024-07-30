import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('marketplace_users', function (table) {
    table.dropColumn('email verified')
    table.dropColumn('marketplace onboard date')
    table.string('email_verified')
    table.timestamp('marketplace_onboard_date')
  })
}

export async function down(knex: Knex): Promise<void> {}
