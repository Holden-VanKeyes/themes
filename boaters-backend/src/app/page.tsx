import styles from './page.module.css'
import { knex } from '@/utils/knex-db'
import { useForm } from '@mantine/form'
import { Button, Checkbox, Group, TextInput } from '@mantine/core'
import getUsers from '@/app/actions/getUsers'
import { revalidatePath } from 'next/cache'

export default async function Home() {
  const userTest = await knex('users')

  const addUser = async (formData: FormData) => {
    'use server'
    const username = formData.get('name')
    const useremail = formData.get('email')
    console.log('BEFORE', userTest)

    await knex('users').insert({
      id: 10,
      name: username,
      email: useremail,
    })
    console.log('AFTER', userTest)
    revalidatePath('/')
  }

  return (
    <main>
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

        {/* <Checkbox mt="md" label="I agree to sell my privacy" /> */}

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      {userTest.map((user: any) => (
        <h3 key={user.id}> {user.name} </h3>
      ))}
      Hello
    </main>
  )
}
