'use client'

import React, { useState, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { answerKey } from '../constants/answerKey'
import css from './GameBoard.module.scss'
import { Button, Modal, Title, Card, ActionIcon, Group } from '@mantine/core'
import { StatsCard } from './StatsCard'
import {
  IconStarFilled,
  IconRocket,
  IconCheese,
  IconX,
  IconCheck,
} from '@tabler/icons-react'

const date = new Date()
const today =
  date.getFullYear() +
  String(date.getMonth() + 1).padStart(2, '0') +
  String(date.getDate()).padStart(2, '0')
const todaysGame = answerKey[today]

interface ColorObj {
  [key: number]: string
}

interface SubmittedSet {
  setNumber: number
  selectedRow: number
}

//8 = hasn't submitted | 0 = incorrect | 1 = correct
const scoreKeeper = [8, 8, 8, 8]

export default function GameBoard() {
  const redDot = '#FF3C38'
  const greenDot = '#0ad904'
  const [gameOver, setGameOver] = useState(false)
  const [endGameModal, setEndGameModal] = useState(false)
  const [selected, setSelected] = useState(0)
  const [gameAdvancer, setGameAdvancer] = useState(0)

  const [submittedSets, setSubmittedSets] = useState<Record<number, number>>({})

  const [guessDotColors, setGuessDotColors] = useState<ColorObj>({
    0: '#888888',
    1: '#888888',
    2: '#888888',
    3: '#888888',
  })

  const correctAnswer = todaysGame.sets[gameAdvancer].correct
  const hint = todaysGame.sets[gameAdvancer].hint
  const answerSet = todaysGame.sets[gameAdvancer].answers
  // const gamePattern = todaysGame.rule.pattern
  // const gameExplain = todaysGame.sets[gameAdvancer].explanation

  const grid = new Array(5).fill(0).map((_, indx) => indx + 1)
  const guessDots = new Array(4).fill(0).map((_, indx) => indx + 1)

  const handleGuessSelect = (indx: number) => {
    if (gameOver || gameAdvancer in submittedSets) {
      return
    }
    setSelected(indx + 1)
  }

  const makeGrid = (indx: number) => {
    useEffect(() => {
      if (!(gameAdvancer in submittedSets)) {
        setSelected(0)
      } else {
        setSelected(submittedSets[gameAdvancer])
      }
    }, [gameAdvancer])

    return (
      <div
        key={indx}
        className={`${css.row} ${selected === indx + 1 ? css.selected : ''} ${
          submittedSets[gameAdvancer] ? css.disabled : ''
        }`}
        id={'set' + `${gameAdvancer + 1}`}
        onClick={() => handleGuessSelect(indx)}
      >
        <Title key={indx} order={2}>
          {answerSet[indx].toUpperCase()}
        </Title>
      </div>
    )
  }

  const checkAnswer = () => {
    setSubmittedSets((prev) => ({ ...prev, [gameAdvancer]: selected }))
    console.log('HERE', Object.entries(submittedSets).length)

    if (Object.entries(submittedSets).length === 3) {
      setGameOver(true)
      setEndGameModal(true)
    }

    if (gameOver) {
      setEndGameModal(!endGameModal)
      return
    }

    const userSelection = answerSet[selected - 1]

    if (userSelection === correctAnswer) {
      scoreKeeper[gameAdvancer] = 1
      setGuessDotColors((prev) => ({ ...prev, [gameAdvancer]: greenDot }))
    } else {
      setGuessDotColors((prev) => ({ ...prev, [gameAdvancer]: redDot }))
    }

    if (gameAdvancer < 3) {
      setGameAdvancer(gameAdvancer + 1)
      return
    } else {
      console.log('last else')
      setGameAdvancer(0)
      // if (Object.entries(submittedSets).length !== 4) {
      //   setGameAdvancer(0)
      //   return
      // }
      // setGameOver(true)
      // setEndGameModal(true)
      // return
    }
  }

  const handleNext = () => {
    if (gameAdvancer === 3) {
      setGameAdvancer(0)
      return
    } else setGameAdvancer(gameAdvancer + 1)
  }
  return (
    <>
      <div className={css.gridBoard}>
        <div className={`${css.row} ${css.hintRow}`}>
          <span className={css.hintPrefix}>hint:</span>
          <Title order={3}>{hint.toUpperCase()}</Title>
        </div>

        {grid.map((_, indx) => makeGrid(indx))}
        <Group justify="center" mt="10px" className={css.guessDots}>
          {guessDots.map((_, indx) => (
            <ActionIcon
              className={`
             ${css.dot}
              ${gameAdvancer === indx ? css.selected : ''}
              ${guessDotColors[indx] === '#888888' ? css.unguessed : ''}
              ${guessDotColors[indx] === greenDot ? css.correct : ''}
              ${guessDotColors[indx] === redDot ? css.wrong : ''}
            `}
              key={indx}
              variant="filled"
              size="xs"
              radius="xl"
            >
              {guessDotColors[indx] === greenDot && (
                <IconCheck className="w-3 h-3 text-white" />
              )}
              {guessDotColors[indx] === redDot && (
                <IconX className="w-3 h-3 text-white" />
              )}
            </ActionIcon>
          ))}
        </Group>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            className={css.submitButton}
            variant="outline"
            radius="lg"
            disabled={
              gameOver
                ? false
                : selected === 0 || submittedSets[gameAdvancer]
                ? true
                : false
            }
            onClick={() => {
              checkAnswer()
            }}
          >
            {gameOver ? 'View Results' : 'Submit'}
          </Button>
          <Button
            className={css.nextButton}
            variant="outline"
            radius="lg"
            onClick={() => {
              handleNext()
            }}
          >
            Next
          </Button>
        </div>
      </div>
      <Modal
        opened={endGameModal}
        centered
        onClose={() => {
          setEndGameModal(false)
        }}
        fullScreen
        size="70%"
        radius={0}
        transitionProps={{
          transition: 'slide-left',
          duration: 400,
          enterDelay: 400,
        }}
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
