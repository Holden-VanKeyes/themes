import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('feedback', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
    table.string('puzzle_date', 10).notNullable()
    table.json('score_keeper').notNullable() // [1,1,0,1] array
    table.integer('skips_used').notNullable().defaultTo(0)
    table.boolean('hard_mode').notNullable().defaultTo(false)
    table.integer('difficulty').notNullable().checkBetween([1, 5])
    table.string('question_text', 500).nullable()
    table.string('question_response', 255).notNullable()
    table.text('feedback').nullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())

    table.index('puzzle_date')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('feedback')
}
