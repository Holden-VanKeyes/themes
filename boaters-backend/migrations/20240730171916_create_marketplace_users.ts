import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('marketplace_users', function (table) {
    table.string('uuid')
    table.string('name', 255).notNullable()
    table.string('email', 255)
    table.boolean('email verified')
    table.timestamp('marketplace onboard date')
    table.timestamps()
  })
}

export async function down(knex: Knex): Promise<void> {}
