'use server'
import { knex } from '@/utils/knex-db'

export default async function create() {
  const userTest = await knex('users')
  return userTest
}
