import Image from 'next/image'
import styles from './page.module.css'
import { knex } from '../utils/knex-db'

export default async function Home() {
  const userTest = await knex('users')
  console.log('New', userTest)

  return (
    <main className={styles.main}>
      {userTest.map((user: any) => (
        <h3 key={user.id}> {user.name} </h3>
      ))}
    </main>
  )
}
