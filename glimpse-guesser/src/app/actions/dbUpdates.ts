'use server'
import { knex } from '@/utils/knex-db'
const sharetribeSDK = require('sharetribe-flex-integration-sdk')
const integrationSdk = sharetribeSDK.createInstance({
  clientId: `${process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID}`,
  clientSecret: `${process.env.SHARETRIBE_SDK_CLIENT_SECRET}`,
})

export default async function insertToDB() {
  const allUsers = await integrationSdk.users.query()

  // await allUsers.data.data.map(async (user: any) => {
  //   await knex('marketplace_users').insert({
  //     uuid: user.id.uuid,
  //     email: user.attributes.email,
  //     email_verified: user.attributes.emailVerified,
  //     marketplace_onboard_date: user.attributes.createdAt,
  //     name: user.attributes.profile.displayName,
  //   })
  // })
}

export async function addTimeStamps() {
  await knex('test_table').update({
    created_at: knex.fn.now(),
    updated_at: knex.fn.now(),
  })
}
