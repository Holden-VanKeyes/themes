'use client'

import React, { useState, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { answerKey } from '../constants/answerKey'
import css from './GameBoard.module.scss'
import {
  Button,
  Modal,
  Title,
  ActionIcon,
  Group,
  Badge,
  LoadingOverlay,
  Center,
} from '@mantine/core'
import { StatsCard } from './StatsCard'
import { IconX, IconCheck } from '@tabler/icons-react'
import { useGameMode } from '../globalHelpers/GameMode'

const date = new Date()
const today =
  date.getFullYear() +
  String(date.getMonth() + 1).padStart(2, '0') +
  String(date.getDate()).padStart(2, '0')

interface GameState {
  submittedSets: Record<number, number>
  guessDotColors: Record<number, string>
  scoreKeeper: number[]
  gameAdvancer: number
  lastPlayed: string
  skips: number
  hardMode: boolean
}

export default function GameBoard() {
  const [isInitialized, setIsInitialized] = useState(false)
  const { isHardMode, setIsLocked, isLocked } = useGameMode()
  const [gameState, setGameState] = useState<GameState>({
    submittedSets: {},
    guessDotColors: {
      0: '#888888',
      1: '#888888',
      2: '#888888',
      3: '#888888',
    },
    scoreKeeper: [0, 0, 0, 0],
    gameAdvancer: 0,
    lastPlayed: '',
    skips: 0,
    hardMode: isHardMode,
  })

  const [gameOver, setGameOver] = useState(false)
  const [endGameModal, setEndGameModal] = useState(false)
  const [selected, setSelected] = useState(0)
  const [justSubmitted, setJustSubmitted] = useState(false)
  const fallbackGame = answerKey['20250220']
  const todaysGame = answerKey[today] || fallbackGame

  const redDot = '#FF3C38'
  const greenDot = '#0ad904'
  const correctAnswer = todaysGame.sets[gameState.gameAdvancer].correct
  const hint = todaysGame.sets[gameState.gameAdvancer].hint
  const answerSet = todaysGame.sets[gameState.gameAdvancer].answers
  const highlightAnswer = !isHardMode ? answerSet.indexOf(correctAnswer) : null
  const grid = new Array(5).fill(0).map((_, indx) => indx + 1)
  const guessDots = new Array(4).fill(0).map((_, indx) => indx + 1)

  useEffect(() => {
    const initGame = () => {
      const savedGame = window.localStorage.getItem('gameState')
      const lastPlayed = window.localStorage.getItem('lastPlayed')

      // If it's a new day or no saved game, return fresh state
      if (lastPlayed !== today || !savedGame) {
        window.localStorage.clear()
        window.localStorage.setItem('lastPlayed', today)
        setIsInitialized(true)
        return
      }

      // Return saved game state
      const parsedState = JSON.parse(savedGame)
      setGameState(parsedState)
      setIsInitialized(true)
    }
    initGame()
  }, [])

  useEffect(() => {
    setGameState((prev) => ({
      ...prev,
      hardMode: isHardMode,
    }))
  }, [isHardMode])

  // Save game state whenever it changes
  useEffect(() => {
    if (!isInitialized) return
    if (Object.keys(gameState.submittedSets).length > 0 && !isLocked) {
      setIsLocked(true)
    }
    localStorage.setItem('gameState', JSON.stringify(gameState))
  }, [gameState])

  useEffect(() => {
    if (isInitialized && Object.keys(gameState.submittedSets).length > 0) {
      const fromStorage = gameState.submittedSets[gameState.gameAdvancer]
      if (fromStorage) {
        setSelected(fromStorage)
      }
    }
  }, [isInitialized])

  const handleGuessSelect = (indx: number) => {
    if (gameOver || gameState.gameAdvancer in gameState.submittedSets) {
      return
    }
    setSelected(indx + 1)
  }

  useEffect(() => {
    if (!(gameState.gameAdvancer in gameState.submittedSets)) {
      setSelected(0)
    } else {
      setSelected(gameState.submittedSets[gameState.gameAdvancer])
    }
  }, [gameState.gameAdvancer])

  const makeGrid = (indx: number) => {
    return (
      <div
        key={indx}
        className={`${css.row} ${selected === indx + 1 ? css.selected : ''} ${
          gameState.submittedSets[gameState.gameAdvancer] ? css.disabled : ''
        } ${
          highlightAnswer === indx &&
          gameState.submittedSets[gameState.gameAdvancer]
            ? css.highlightAnswer
            : ''
        }`}
        id={'set' + `${gameState.gameAdvancer + 1}`}
        onClick={() => handleGuessSelect(indx)}
      >
        <Title key={indx} order={2}>
          {answerSet[indx].toUpperCase()}
        </Title>
      </div>
    )
  }

  const updateGameState = (updates: Partial<GameState>) => {
    setGameState((prev) => ({
      ...prev,
      ...updates,
    }))
  }

  const checkAnswer = () => {
    setJustSubmitted(true)

    const userSelection = answerSet[selected - 1]
    const newGameState = { ...gameState }
    //keep track of sets user has answered in a submittedSets obj where:
    //key = set they answered and value = selected answer
    newGameState.submittedSets[gameState.gameAdvancer] = selected

    //check if there are 4 submittedSets (total possible)
    if (Object.entries(gameState.submittedSets).length === 4) {
      setGameOver(true)
      setEndGameModal(true)
    }

    //handles allowing user to open/close stats modal after game is over
    if (gameOver) {
      setEndGameModal(!endGameModal)
      return
    }

    if (userSelection === correctAnswer) {
      newGameState.scoreKeeper[gameState.gameAdvancer] = 1
      newGameState.guessDotColors[gameState.gameAdvancer] = greenDot
    } else {
      newGameState.guessDotColors[gameState.gameAdvancer] = redDot
    }

    updateGameState(newGameState)
  }

  //1st time nexting from an answered set then change to true - next time if true then add a skip
  //if the gameSet you're on has already been answered then do nothing - don't add skips when landing on answered set
  //consider not charging skip if all but one answered
  const handleNext = () => {
    const localPosition =
      gameState.gameAdvancer === 3 ? 0 : gameState.gameAdvancer + 1
    if (localPosition === 0) {
      updateGameState({ gameAdvancer: 0 })
    } else updateGameState({ gameAdvancer: gameState.gameAdvancer + 1 })

    if (justSubmitted || gameState.submittedSets[localPosition]) {
      setJustSubmitted(false)
    } else {
      updateGameState({ skips: gameState.skips + 1 })
      setJustSubmitted(false)
    }
    return
  }
  const handleSkips = (indx: number) => {
    updateGameState({ gameAdvancer: indx })
    if (gameState.submittedSets[indx] || justSubmitted) {
      setJustSubmitted(false)
    } else {
      updateGameState({ skips: gameState.skips + 1 })
      setJustSubmitted(false)
    }
  }
  return (
    <>
      <div className={css.gridBoard}>
        {!isInitialized ? (
          <LoadingOverlay visible={true} />
        ) : (
          <>
            <div className={css.setHeader}>
              <div className={`${css.row} ${css.hintRow}`}>
                <span className={css.hintPrefix}>hint:</span>
                <Title order={3}>{hint.toUpperCase()}</Title>
              </div>
              {isHardMode ? (
                <Badge variant="outline" color="#C5283D" size="sm" mt="xs">
                  Hard Mode On
                </Badge>
              ) : null}
            </div>
            {grid.map((_, indx) => makeGrid(indx))}
            <Group justify="center" mt="10px" className={css.guessDots}>
              {guessDots.map((_, indx) => (
                <ActionIcon
                  className={`
                    ${css.dot}
                    ${gameState.gameAdvancer === indx ? css.selected : ''}
                    ${
                      gameState.guessDotColors[indx] === '#888888'
                        ? css.unguessed
                        : ''
                    }
                    ${
                      gameState.guessDotColors[indx] === greenDot
                        ? css.correct
                        : ''
                    }
                    ${
                      gameState.guessDotColors[indx] === redDot ? css.wrong : ''
                    }
                  `}
                  key={indx}
                  variant="filled"
                  size="xs"
                  radius="xl"
                  onClick={() => handleSkips(indx)}
                >
                  {gameState.guessDotColors[indx] === greenDot && (
                    <IconCheck className="w-3 h-3 text-white" />
                  )}
                  {gameState.guessDotColors[indx] === redDot && (
                    <IconX className="w-3 h-3 text-white" />
                  )}
                </ActionIcon>
              ))}
            </Group>
            <Center>
              <Badge variant="outline" color="#4682b4" size="sm" mt="xs">
                Skips: +{gameState.skips}
              </Badge>
            </Center>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                className={css.submitButton}
                variant="outline"
                radius="lg"
                disabled={
                  Object.keys(gameState.submittedSets).length === 4
                    ? false
                    : selected === 0 ||
                      gameState.submittedSets[gameState.gameAdvancer]
                    ? true
                    : false
                }
                onClick={() => {
                  checkAnswer()
                }}
              >
                {Object.keys(gameState.submittedSets).length === 4
                  ? 'View Results'
                  : 'Submit'}
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
          </>
        )}
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
          scoreKeeper={gameState.scoreKeeper}
          today={today}
          skips={gameState.skips}
        />
      </Modal>
    </>
  )
}
