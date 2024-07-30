import styles from './page.module.css'
import { knex } from '@/utils/knex-db'
import { useForm } from '@mantine/form'
import { Button, Checkbox, Group, TextInput, Container } from '@mantine/core'
import getUsers from '@/app/actions/getUsers'
import { revalidatePath } from 'next/cache'
import MarketplaceDisplay from './components/MarketplaceDisplay'
import insertToDB from './actions/dbUpdates'
import TestComponent from './components/TestComponent'
import { Navbar } from './components/Navbar'

export default async function Home() {
  const userTest = await knex('users')
  const mPlaceUser = await knex('marketplace_users').where(
    'uuid',
    '6286b43f-3dce-48b6-9cdb-9f8e87721f79',
  )
  const mplaceAll = await knex('marketplace_users')
  const oneUser = await knex('users').where('id', 4)

  const addUser = async (formData: FormData) => {
    'use server'
    const username = formData.get('name')
    const useremail = formData.get('email')

    await knex('users').insert({
      name: username,
      email: useremail,
    })

    revalidatePath('/')
  }

  return (
    <>
      <Navbar />

      <Container m="lg">
        {/* <main>
        <form action={addUser}>
          <TextInput
            withAsterisk
            label="Name"
            name="name"
            placeholder="input name"
          />
          <TextInput
            withAsterisk
            label="Email"
            name="email"
            placeholder="input email"
          />

    

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
        {userTest.map((user: any) => (
          <h3 key={user.id}> {user.name} </h3>
        ))}
        Hello
      </main> */}
        {/* <MarketplaceDisplay /> */}

        <TestComponent />
      </Container>
    </>
  )
}
