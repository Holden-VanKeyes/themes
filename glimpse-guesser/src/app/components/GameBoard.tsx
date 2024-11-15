'use client'

import React, { useState } from 'react'
import { answerKey } from '../constants/answerKey'
import css from './GameBoard.module.scss'
import { Button, Title } from '@mantine/core'

export default function GameBoard() {
  const [selected, setSelected] = useState(0)
  const [currentSet, setCurrentSet] = useState(0)
  const today = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '')
    .toString()
  const todaysGame = answerKey[today]
  console.log('TODAY', todaysGame.sets[0])

  const grid = new Array(5).fill(0).map((_, indx) => indx + 1)

  const makeGrid = (indx: number) => {
    return (
      <div
        key={indx}
        className={`${css.row} ${selected === indx + 1 ? css.selected : ''}`}
        id={'row' + `${indx + 1}`}
        onClick={() => setSelected(indx + 1)}
      >
        <Title key={indx} order={2}>
          {todaysGame.sets[0].answers[indx].toUpperCase()}
        </Title>

        {/* {todaysGame.sets[currentSet].answers.map((answer, indx) => (
          <Title key={indx}>{answer[currentSet]}</Title>
        ))} */}
      </div>
    )
  }

  return (
    <>
      <div className={css.gridBoard}>
        <div className={`${css.row} ${css.hintRow}`}>
          <span className={css.hintPrefix}>hint:</span>
          <Title order={3}>{todaysGame.sets[0].hint.toUpperCase()}</Title>
        </div>
        {grid.map((_, indx) => makeGrid(indx))}
        <Button
          variant="outline"
          radius="lg"
          style={{
            margin: '20px auto',
            width: '50%',
            border: '1.5px solid #4682b4',
            color: 'black',
            fontSize: '.9rem',
          }}
        >
          Let's Go!
        </Button>
      </div>
    </>
  )
}
