'use server'
import { knex } from '@/utils/knex-db'

export default async function create() {
  const test = await knex('test_table')
  return test
}

export async function getMarketUsers() {
  const allDockUsers = await knex('users')
  return allDockUsers
}
