require('dotenv').config({ path: '.env.development' })

import type { Knex } from 'knex'

// Update with your config settings.
console.log('URL', process.env.POSTGRES_URL)

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    database: 'dev',
  },
  migrations: {
    extension: 'ts',
  },
}

export default config
