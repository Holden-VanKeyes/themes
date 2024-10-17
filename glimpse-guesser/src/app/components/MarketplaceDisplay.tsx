import React from 'react'
import { knex } from '@/utils/knex-db'
import { revalidatePath } from 'next/cache'
const sharetribeSDK = require('sharetribe-flex-integration-sdk')
// import sharetribeSDK from 'sharetribe-flex-integration-sdk'

const integrationSdk = sharetribeSDK.createInstance({
  clientId: `${process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID}`,
  clientSecret: `${process.env.SHARETRIBE_SDK_CLIENT_SECRET}`,
})

const email = 'abramius@hotmail.com'
export default async function MarketplaceDisplay() {
  const dockUser = await integrationSdk.users.show({
    email: email,
    include: ['listing'],
  })

  const allUsers = await integrationSdk.users.query()
  const uuid = await dockUser.data?.data?.id?.uuid

  //just get display name
  const test = allUsers.data.data.map(
    (user: any) => user.attributes.profile.displayName,
  )

  return <div>MarketplaceDisplay</div>
}
