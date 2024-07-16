import Image from 'next/image'
import styles from './page.module.css'
import knex from '../../knexfile'

console.log('KNEX', knex)
export default function Home() {
  return (
    <main className={styles.main}>
      <div>Hello</div>
    </main>
  )
}
