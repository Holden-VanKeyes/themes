require('dotenv').config({ path: '.env.development' })

import type { Knex } from 'knex'

// Update with your config settings.

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: '0.0.0.0',
    port: 5432,
    database: 'postgres',
  },
  //@ts-ignore
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
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
