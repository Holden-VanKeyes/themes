'use server'
import { knex } from '@/utils/knex-db'

export default async function create() {
  const userTest = await knex('users')
  return userTest
}

export async function getMarketUsers() {
  const allDockUsers = await knex('marketplace_users')
  return allDockUsers
}
