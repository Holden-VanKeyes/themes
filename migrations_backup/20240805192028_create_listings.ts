import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  //   return knex.schema.createTable('listings', function (table) {
  //     table
  //       .uuid('id', { primaryKey: true })
  //       .defaultTo(knex.raw('uuid_generate_v4()'))
  //     table.integer('user_id').unsigned()
  //     table.foreign('user_id').references('user.uuid')
  //     table.timestamps()
  //   })
}

export async function down(knex: Knex): Promise<void> {}
