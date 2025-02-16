import styles from './page.module.css'
import { knex } from '@/utils/knex-db'
import { useForm } from '@mantine/form'
import {
  Button,
  Checkbox,
  Group,
  TextInput,
  Container,
  Center,
} from '@mantine/core'
import getUsers from '@/app/actions/getUsers'
import { revalidatePath } from 'next/cache'
import Grid from './components/GridDisplay'
import insertToDB from './actions/dbUpdates'
import { Navbar } from './components/Navbar'
import React from 'react'
import GridDisplay from './components/GridDisplay'
import GameBoard from './components/GameBoard'
import { GameModeProvider } from './globalHelpers/GameMode'

export default async function Home() {
  // const mPlaceUser = await knex('users').where(
  //   'uuid',
  //   '6286b43f-3dce-48b6-9cdb-9f8e87721f79',
  // )
  // const mplaceAll = await knex('users')

  // const addUser = async (formData: FormData) => {
  //   'use server'
  //   const username = formData.get('name')
  //   const useremail = formData.get('email')

  //   await knex('test_table').insert({
  //     name: username,
  //     email: useremail,
  //   })

  //   revalidatePath('/')
  // }

  return (
    <>
      <GameModeProvider>
        <Navbar />
        <Center>
          {/* <GridDisplay /> */}
          <GameBoard />
        </Center>
      </GameModeProvider>
    </>
  )
}
