import knex from 'knex'
import config from './knexfile'
console.log('HIT')

const db = knex(config)

export default db
