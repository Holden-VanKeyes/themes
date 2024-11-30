'use client'

import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { answerKey } from '../constants/answerKey'
import css from './GameBoard.module.scss'
import { Button, Modal, Title, Card, ActionIcon, Group } from '@mantine/core'
import { StatsCard } from './StatsCard'

const date = new Date()
const today =
  date.getFullYear() +
  String(date.getMonth() + 1).padStart(2, '0') +
  String(date.getDate()).padStart(2, '0')
const todaysGame = answerKey[today]

interface ColorObj {
  [key: number]: string
}
const guessDotColors: ColorObj = {
  0: '#333333',
  1: '#333333',
  2: '#333333',
  3: '#333333',
}

const scoreKeeper = [0, 0, 0, 0]

export default function GameBoard() {
  const [gameOver, setGameOver] = useState(false)
  const [endGameModal, setEndGameModal] = useState(false)
  const [selected, setSelected] = useState(0)
  const [gameAdvancer, setGameAdvancer] = useState(0)
  // const [guesses, setGuesses] = useState([0, 0, 0, 0])

  const correctAnswer = todaysGame.sets[gameAdvancer].correct
  const hint = todaysGame.sets[gameAdvancer].hint
  const answerSet = todaysGame.sets[gameAdvancer].answers
  const gamePattern = todaysGame.rule.pattern
  const gameExplain = todaysGame.sets[gameAdvancer].explanation

  const grid = new Array(5).fill(0).map((_, indx) => indx + 1)
  // const remainingGuesses = new Array(guesses).fill(0).map((_, indx) => indx + 1)
  const guessDots = new Array(4).fill(0).map((_, indx) => indx + 1)

  const makeGrid = (indx: number) => {
    return (
      <div
        key={indx}
        className={`${css.row} ${selected === indx + 1 ? css.selected : ''}`}
        id={'set' + `${gameAdvancer + 1}`}
        onClick={() => (gameOver ? undefined : setSelected(indx + 1))}
      >
        <Title key={indx} order={2}>
          {answerSet[indx].toUpperCase()}
        </Title>
      </div>
    )
  }

  const checkAnswer = () => {
    if (gameOver) {
      setEndGameModal(!endGameModal)
      return
    }

    const userSelection = answerSet[selected - 1]

    if (userSelection === correctAnswer) {
      scoreKeeper[gameAdvancer] = 1
      setSelected(0)
      guessDotColors[gameAdvancer] = '#0ad904'

      gameAdvancer < 3 ? setSelected(0) : setSelected(selected)
      console.log(selected)
    } else {
      setSelected(0)
      guessDotColors[gameAdvancer] = '#FF3C38'
      gameAdvancer < 3 ? setSelected(0) : setSelected(selected)
    }

    if (gameAdvancer < 3) {
      console.log('ADV', gameAdvancer)
      setGameAdvancer(gameAdvancer + 1)
      return
    } else {
      setGameOver(true)
      setEndGameModal(true)
      return
    }
  }

  return (
    <>
      <div className={css.gridBoard}>
        <div className={`${css.row} ${css.hintRow}`}>
          <span className={css.hintPrefix}>hint:</span>
          <Title order={3}>{hint.toUpperCase()}</Title>
        </div>

        {grid.map((_, indx) => makeGrid(indx))}
        <Group justify="center" mt="10px">
          {guessDots.map((_, indx) => (
            <ActionIcon
              key={indx}
              variant="filled"
              size="xs"
              radius="xl"
              color={guessDotColors[indx]}
            />
          ))}
        </Group>

        <Button
          variant="outline"
          radius="lg"
          disabled={selected ? false : true}
          style={{
            margin: '20px auto',
            width: '50%',
            border: '1.5px solid #4682b4',
            color: 'black',
            fontSize: '.9rem',
          }}
          onClick={() => {
            checkAnswer()
          }}
        >
          {gameOver ? 'View Results' : "Let's Go!"}
        </Button>
      </div>
      <Modal
        opened={endGameModal}
        centered
        onClose={() => {
          setEndGameModal(false)
          // close()
        }}
        fullScreen
        size="70%"
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <StatsCard
          todaysGame={todaysGame}
          scoreKeeper={scoreKeeper}
          today={today}
        />
      </Modal>
    </>
  )
}
