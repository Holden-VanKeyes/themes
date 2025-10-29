import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('feedback', (table) => {
    table.integer('difficulty').nullable().alter()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('feedback', (table) => {
    table.integer('difficulty').notNullable().alter()
  })
}
