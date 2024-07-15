require('dotenv').config({ path: '.env.development' })

import type { Knex } from 'knex'

// Update with your config settings.
console.log('URL', process.env.POSTGRES_URL)

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

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       database: 'postgres',
//       host: '0.0.0.0',
//       port: 5432,
//     },
//   },
// }
