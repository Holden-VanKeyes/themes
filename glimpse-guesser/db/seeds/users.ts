import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  return knex('users').insert([
    { id: 1, name: 'Hettie Marshall', email: 'lantunde@acbo.va' },
    { id: 2, name: 'Hester Owens', email: 'zo@girih.lv' },
    { id: 3, name: 'Henry Jackson', email: 'bekamohi@owo.mt' },
  ])
}
