import { useState } from 'react'
import {
  Button,
  Modal,
  Title,
  Text,
  Group,
  Badge,
  Slider,
  TextInput,
  Checkbox,
  Stack,
} from '@mantine/core'
import { useForm } from '@mantine/form'

interface FeedbackFormProps {
  openFeedbackModal: boolean
  handleFeedBack?: (value: string) => void
}

export default function FeedbackForm({
  openFeedbackModal,
  handleFeedBack,
}: FeedbackFormProps) {
  const [difficulty, setDifficulty] = useState(1)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const formSubmit = async (values: {
    email: string
    termsOfService: boolean
  }) => {
    const { email, termsOfService } = values

    if (termsOfService) {
      // Handle form submission logic here
      console.log('Form submitted:', { email, termsOfService })
      handleFeedBack?.('submitted')
    }
  }

  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ]
  return (
    <Modal
      opened={openFeedbackModal}
      onClose={() => handleFeedBack?.('close')}
      size="lg"
    >
      <form
        style={{ padding: '20px' }}
        onSubmit={form.onSubmit((values) => formSubmit(values))}
      >
        <Stack gap="lg">
          <Text size="sm">How hard was today's game?</Text>
          <Slider
            defaultValue={1}
            value={difficulty}
            onChange={setDifficulty}
            label={null}
            step={1}
            min={1}
            max={5}
            marks={marks}
            //   styles={{ markLabel: { display: 'none' } }}
            my="lg"
          />

          {/* <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          key={form.key('termsOfService')}
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        /> */}

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  )
}
