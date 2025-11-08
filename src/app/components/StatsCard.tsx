import {
  ThemeIcon,
  Progress,
  Text,
  Group,
  Center,
  Paper,
  rem,
  Title,
  Box,
  Button,
  Notification,
  Alert,
  Badge,
} from '@mantine/core'
import {
  IconStarFilled,
  IconRocket,
  IconCheese,
  IconX,
  IconCheck,
} from '@tabler/icons-react'
import css from './StatsCard.module.scss'
import { GAME_MESSAGES } from '../constants/answerKey'
import { GAME_EMOJIS } from '../constants/answerKey'
import type { GameSet } from '../constants/answerKey'
import type { GameDay } from '../constants/answerKey'
import { useState } from 'react'
import { useThemeContext } from '../globalHelpers/ThemeProvider'

interface GameProps {
  // gameAdvancer: number
  // gamePattern: string
  // gameExplain: string
  todaysGame: GameDay
  scoreKeeper: number[]
  today: string
  skips: number
  trialGamesCounter: number
  handleTrialNext: () => void
}

interface AlertState {
  type: 'success' | 'error' | ''
  show: boolean
}

export function StatsCard({
  todaysGame,
  scoreKeeper,
  today,
  skips,
  handleTrialNext,
  trialGamesCounter,
}: GameProps) {
  const { colorScheme } = useThemeContext()
  const numberOfGuesses = scoreKeeper.reduce((a, b) => a + b)
  const clipboardData = scoreKeeper.map((score) => {
    if (score === 1) {
      return '🟢'
    } else return '⭕'
  })
  const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)
  const [clipboardAlert, setClipboardAlert] = useState<AlertState>({
    type: '',
    show: false,
  })
  const getGameNumber = () => {
    const firstGameDate = new Date('2024-11-17') // Your first game date
    const formattedDate = today.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')

    const currentGameDate = new Date(formattedDate)
    const diffTime = currentGameDate.getTime() - firstGameDate.getTime()
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
  }

  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />
  const errorIcon = <IconX style={{ width: rem(20), height: rem(20) }} />

  const handleShare = async () => {
    const gameNumber = getGameNumber()

    if (!isMobile) {
      try {
        await navigator.clipboard.writeText(
          `Themantics - Game #${gameNumber}\n` +
            // '\n' +
            // `x ${numberOfGuesses} correct\n` +
            `${clipboardData.join(' ')}\n` +
            `Skips: ${skips}\n` +
            `Score: ${
              numberOfGuesses === 0 ? 0 : numberOfGuesses * 25 - skips * 5
            }`
        )
        setClipboardAlert({
          type: 'success',
          show: true,
        })
        setTimeout(() => setClipboardAlert({ type: '', show: false }), 2500)
      } catch (error) {
        setClipboardAlert({
          type: 'error',
          show: true,
        })
        setTimeout(() => setClipboardAlert({ type: '', show: false }), 2500)
      }
    } else {
      try {
        await navigator.share({
          text:
            `Themantics - Game #${gameNumber}\n` +
            `${clipboardData.join(' ')}\n` +
            `Skips: ${skips}\n` +
            `Score: ${
              numberOfGuesses === 0 ? 0 : numberOfGuesses * 25 - skips * 5
            }`,
        })
      } catch (error) {
        console.log('error copying to clipboard')
      }
    }
  }

  return (
    <Paper className={css.card} mt={40} p="xl">
      <ThemeIcon className={css.icon} size={60} radius={60} style={{}}>
        <IconCheese style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Title ta="center" order={2} fw={700} className={css.title} mt="xs">
        {GAME_MESSAGES[numberOfGuesses]}
      </Title>
      {/* <Text c="dimmed" ta="center" fz="sm">
        32 km / week
      </Text> */}

      {/* <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Progress
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group> */}

      <Progress value={100} mt={10} size="xs" color="#4682b4" />
      <Box mt="md">
        {clipboardAlert.show ? (
          <Center>
            <Alert
              icon={clipboardAlert.type === 'error' ? errorIcon : checkIcon}
              color={clipboardAlert.type === 'error' ? 'red' : 'teal'}
              variant="filled"
              title={
                clipboardAlert.type === 'error'
                  ? 'Failed to copy to clipboard'
                  : 'Copied to clipboard!'
              }
            />
          </Center>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '55.7px',
            }}
          >
            <Text fz="sm" ta="center">
              Today&apos;s Theme
            </Text>
            <Text fz="sm" c="dimmed" ta="center">
              {todaysGame.rule.pattern}
            </Text>
          </div>
        )}
      </Box>

      <Progress value={100} mt="sm" size="xs" color="#4682b4" />
      <Box mt="md">
        <Text fz="sm" ta="center">
          Answers Explained
        </Text>
        {todaysGame.sets.map((set: any, indx) => (
          <Text key={indx} fz="sm" c="dimmed" ta="center" mt="xs">
            {set.explanation}
          </Text>
        ))}
      </Box>

      <Progress value={100} mt="lg" size="xs" color="#4682b4" />
      <Center mt="md" style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <ActionIcon size="xl" radius="xl" variant="outline" mb="sm">
          <Title order={1} ta="center">
            {GAME_EMOJIS[numberOfGuesses]}
          </Title>
        </ActionIcon> */}
        {/* <Group gap="5px">
          <Title order={2} ta="center">
            {GAME_EMOJIS[numberOfGuesses]}
          </Title>
          <Text fz="sm" c="dimmed">
            Correct = x
            {numberOfGuesses === 5 ? numberOfGuesses - 1 : numberOfGuesses}
          </Text>
        </Group> */}
        <Group>
          <Badge variant="outline" color="#153424ff" size="sm" mt="xs">
            Score:{' '}
            {numberOfGuesses === 0 ? 0 : numberOfGuesses * 25 - skips * 5}
          </Badge>
          <Badge variant="outline" color="#153424ff" size="sm" mt="xs">
            Skips: +{skips}
          </Badge>
        </Group>

        <div className={css.shareContainer}>
          <div
            className={`${css.shareSquares} ${
              scoreKeeper[0] === 1 ? css.right : css.wrong
            }`}
          />
          <div
            className={`${css.shareSquares} ${
              scoreKeeper[1] === 1 ? css.right : css.wrong
            }`}
          />
          <div
            className={`${css.shareSquares} ${
              scoreKeeper[2] === 1 ? css.right : css.wrong
            }`}
          />
          <div
            className={`${css.shareSquares} ${
              scoreKeeper[3] === 1 ? css.right : css.wrong
            }`}
          />
        </div>
        <Group>
          <Button
            variant={colorScheme === 'dark' ? 'filled' : 'outline'}
            color={colorScheme === 'dark' ? 'white' : 'null'}
            radius="lg"
            className={css.shareResultsBtn}
            onClick={() => handleShare()}
          >
            Share Results
          </Button>
          <Button
            // variant={colorScheme === 'dark' ? 'filled' : 'outline'}
            // color={colorScheme === 'dark' ? 'white' : 'null'}
            color="#4682b4"
            variant="filled"
            radius="lg"
            disabled={trialGamesCounter >= 7}
            // className={css.shareResultsBtn}
            onClick={() => handleTrialNext()}
          >
            Play Next?
          </Button>
        </Group>
      </Center>
    </Paper>
  )
}
