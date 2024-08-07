require('dotenv').config({ path: '.env.development' })

import type { Knex } from 'knex'

// Update with your config settings.

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: '0.0.0.0',
    port: 5432,
    database: 'postgres',
  },
  migrations: {
    extension: 'ts',
  },
}

export default config
