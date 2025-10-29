'use client'
import { useState } from 'react'
import {
  Button,
  Modal,
  Title,
  Text,
  Group,
  Badge,
  Slider,
  Textarea,
  Radio,
  Stack,
  TextInput,
  Checkbox,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { submitFeedback } from '../actions/submitFeedback'
import { notifications } from '@mantine/notifications'

interface FeedbackFormProps {
  todaysGame: string
  handleFeedBack?: (value: string) => void
}

export default function FeedbackForm({
  handleFeedBack,
  todaysGame,
}: FeedbackFormProps) {
  const [isZero, setIsZero] = useState(true)
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      difficulty: 0,
      email: '',
      question: '',
      feedback: '',
    },
    onValuesChange: (values) => {
      values.difficulty === 0 ? setIsZero(true) : setIsZero(false)
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      question: (value) => (value ? null : 'Please select an option'),
      // difficulty: (value) =>
      //   value > 0 ? null : 'Please rate the difficulty (1-5)',
    },
  })

  const formSubmit = async () => {
    console.log('Submitting feedback...')

    const values = form.getValues()
    const gameState = JSON.parse(localStorage.getItem('gameState') || '{}')

    const feedbackData = {
      puzzle_date: todaysGame,
      email: values.email,
      // difficulty: values.difficulty,
      question_response: Object.values(values.question).join(', '),
      feedback: values.feedback,
      skips_used: gameState.skips || 0,
      hard_mode: gameState.hardMode || false,
      score_keeper: JSON.stringify(gameState.scoreKeeper) || '[]',
    }

    const result = await submitFeedback(feedbackData)
    if (result.success) {
      handleFeedBack?.('submitted')
      notifications.show({
        title: 'Feedback Submitted',
        message: 'Thank you for your feedback!',
        color: 'green',
        autoClose: 4000,
        position: 'top-right',
      })
    } else {
      console.error('Failed to submit feedback:', result.error)
    }
    // handleFeedBack?.('submitted')
    return
  }
  const marks = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ]
  return (
    <form
      style={{ padding: '20px' }}
      onSubmit={form.onSubmit(() => formSubmit())}
    >
      <Title order={5} mb="md">
        Join our testing group to unlock all 6 trial puzzles!
      </Title>
      <Stack>
        {/* <Text size="sm">How hard was today's game?</Text>
        <Slider
          {...form.getInputProps('difficulty')}
          key={form.key('difficulty')}
          label={null}
          step={1}
          min={0}
          max={5}
          marks={marks}
          color={isZero ? 'gray' : 'blue'} // Visual feedback
        />
        {form.errors.difficulty && (
          <Text c="red" size="xs" mt="xs">
            {form.errors.difficulty}
          </Text>
        )} */}
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <Checkbox.Group
          {...form.getInputProps('question')}
          key={form.key('question')}
          label="Did game instructions give clear understanding of gameplay?"
          withAsterisk
        >
          <Group my="xs">
            <Checkbox
              value="create"
              label="Create and access community puzzles"
            />
            <Checkbox value="playAll" label="Play all past daily puzzles " />
            <Checkbox
              value="leaderboard"
              label="View leaderboard and progress over time"
            />
            <Checkbox value="hints" label="Get hints during gameplay" />
            <Checkbox value="none" label="None of these interest me" />
          </Group>
        </Checkbox.Group>
        <Textarea
          {...form.getInputProps('feedback')}
          key={form.key('feedback')}
          mt="lg"
          label="Any other feedback or words of encouragment?"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Stack>
    </form>
  )
}
