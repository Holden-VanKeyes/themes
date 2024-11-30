require('dotenv').config({ path: '.env.development' })

import type { Knex } from 'knex'

// Update with your config settings.
console.log('ENV FROM HEROKU', process.env.DATABASE_URL)

const dev = process.env.NODE_ENV === 'development'
const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: '0.0.0.0',
    port: 5432,
    database: dev ? 'postgres' : process.env.DATABASE_URL,
    ssl: dev ? undefined : { rejectUnauthorized: false },
  },
  migrations: {
    extension: 'ts',
  },
}

// const config: { [key: string]: Knex.Config } = {
//   development: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL || {
//       host: '0.0.0.0',
//       port: 5432,
//       database: 'postgres',
//     },
//     ssl: { rejectUnauthorized: false },
//     migrations: {
//       extension: 'ts',
//     }
//   }
// };

export default config
