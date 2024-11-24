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
  ActionIcon,
} from '@mantine/core'
import { IconStarFilled, IconRocket, IconCheese } from '@tabler/icons-react'
import css from './StatsCard.module.scss'
import { GAME_MESSAGES } from '../constants/answerKey'
import { GAME_EMOJIS } from '../constants/answerKey'
import type { GameSet } from '../constants/answerKey'
import type { GameDay } from '../constants/answerKey'

interface GameProps {
  // gameAdvancer: number
  // gamePattern: string
  // gameExplain: string
  todaysGame: GameDay
  scoreKeeper: number[]
}

export function StatsCard({ todaysGame, scoreKeeper }: GameProps) {
  console.log('HERE', scoreKeeper)
  const numberOfGuesses = scoreKeeper.reduce((a, b) => a + b)
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
        <Text fz="sm" ta="center">
          Today&apos;s Theme
        </Text>
        <Text fz="sm" c="dimmed" ta="center">
          {todaysGame.rule.pattern}
        </Text>
      </Box>

      <Progress value={100} mt="lg" size="xs" color="#4682b4" />
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
        <Group gap="5px">
          <Title order={2} ta="center">
            {GAME_EMOJIS[numberOfGuesses]}
          </Title>
          <Text fz="sm" c="dimmed">
            Correct = x
            {numberOfGuesses === 5 ? numberOfGuesses - 1 : numberOfGuesses}
          </Text>
        </Group>

        {/* <div className={css.shareDiv} id={`${numberOfGuesses}`} /> */}
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

        <Button
          variant="outline"
          radius="lg"
          style={{
            margin: '30px auto',
            // width: '50%',
            border: '1.5px solid #4682b4',
            color: 'black',
            fontSize: '.9rem',
          }}
        >
          Share Results
        </Button>
      </Center>
    </Paper>
  )
}
