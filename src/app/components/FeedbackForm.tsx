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
      question: '',
      feedback: '',
    },
    onValuesChange: (values) => {
      values.difficulty === 0 ? setIsZero(true) : setIsZero(false)
    },

    validate: {
      question: (value) => (value ? null : 'Please select an option'),
      difficulty: (value) =>
        value > 0 ? null : 'Please rate the difficulty (1-5)',
    },
  })

  const formSubmit = async () => {
    const values = form.getValues()
    const gameState = JSON.parse(localStorage.getItem('gameState') || '{}')

    const feedbackData = {
      puzzle_date: todaysGame,
      difficulty: values.difficulty,
      question_response: values.question,
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
        To view and share your results please provide this quick feedback
      </Title>
      <Stack>
        <Text size="sm">How hard was today's game?</Text>
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
        )}
        <Radio.Group
          {...form.getInputProps('question')}
          key={form.key('question')}
          label="Did game instructions give clear understanding of gameplay?"
          withAsterisk
        >
          <Group my="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Textarea
          {...form.getInputProps('feedback')}
          key={form.key('feedback')}
          mt="lg"
          label="Anything else?"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Stack>
    </form>
  )
}
