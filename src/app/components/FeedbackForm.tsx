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

interface FeedbackFormProps {
  handleFeedBack?: (value: string) => void
}

export default function FeedbackForm({ handleFeedBack }: FeedbackFormProps) {
  const [didRate, setDidRate] = useState(0)
  const form = useForm({
    initialValues: {
      difficulty: 1,
      question: '',
      feedback: '',
    },

    validate: {
      question: (value) => (value ? null : 'Please select an option'),
      difficulty: (value) =>
        value === didRate ? null : 'Please rate the difficulty',
    },
  })

  const formSubmit = async () => {
    if (form.isTouched('difficulty')) {
      setDidRate(form.values.difficulty)
    }
    handleFeedBack?.('submitted')
  }

  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ]
  return (
    // <Modal
    //   opened={openFeedbackModal}
    //   onClose={() => handleFeedBack?.('close')}
    //   size="lg"
    // >
    <form
      style={{ padding: '20px' }}
      onSubmit={form.onSubmit(() => formSubmit())}
    >
      <Title order={5} mb="md">
        To view and share results please provide this quick feedback
      </Title>
      <Stack>
        <Text size="sm">How hard was today's game?</Text>
        <Slider
          {...form.getInputProps('difficulty')}
          //   defaultValue={1}
          //   value={difficulty}
          //   onChange={setDifficulty}
          label={null}
          step={1}
          min={1}
          max={5}
          marks={marks}
          mb="xl"
        />
        <Radio.Group
          {...form.getInputProps('question')} // Connect to form
          name="question"
          label="Did game instructions give clear understanding of gaameplay?"
          //   description="This is anonymous"
          withAsterisk
        >
          <Group mt="xs">
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </Group>
        </Radio.Group>
        <Textarea
          {...form.getInputProps('feedback')} // Connect to form
          mt="lg"
          label="Anything else?"
          // description="Input description"
          // placeholder="Input placeholder"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Stack>
    </form>
    // </Modal>
  )
}
