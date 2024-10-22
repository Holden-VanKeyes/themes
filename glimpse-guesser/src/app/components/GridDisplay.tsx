'use client'
import React from 'react'
import { knex } from '@/utils/knex-db'
import { revalidatePath } from 'next/cache'
import { Grid, Button, Box, Container, SimpleGrid } from '@mantine/core'
import css from './GridDisplay.module.css'

const grid = new Array(5).fill(0).map((_, indx) => indx + 1)

const makeGrid = () => {
  return (
    <div className={css.row}>
      <div className={css.tile} />
      <div className={css.tile} />
      <div className={css.tile} />
    </div>
  )
}

export default function GridDisplay() {
  return (
    // <Container p="md">
    //   <SimpleGrid cols={5}>
    //     {grid.map((_, indx) => (
    //       <Button key={indx} size="lg" />
    //     ))}
    //   </SimpleGrid>
    // </Container>
    <div className={css.gridBoard}>
      {/* <div className={css.row}>
        <div className={css.tile} />
      </div> */}
      {grid.map((num) => makeGrid())}
    </div>
  )
}
