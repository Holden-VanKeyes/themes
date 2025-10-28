'use client'
import { useState } from 'react'
import {
  Container,
  Image,
  Group,
  Button,
  ActionIcon,
  Box,
  Title,
  Popover,
  Text,
  Modal,
  Switch,
  List,
  ThemeIcon,
  rem,
  Badge,
  em,
  TextInput,
  Alert,
} from '@mantine/core'
import {
  IconStarFilled,
  IconQuestionMark,
  IconInfoCircle,
  IconInfoSmall,
  IconBrandPaypal,
  IconCash,
  IconRobot,
  IconHeartHandshake,
  IconX,
  IconCheck,
  IconCircleFilled,
  IconArrowBigRightFilled,
  IconCoffee,
  IconDiamondFilled,
  IconBulb,
} from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import logo from '../assets/boaterslist-logo-horizontal-color-white.png'
import BoatersLogo from '../assets/boaters-logo.svg'
import css from './Navbar.module.css'
import Link from 'next/link'
import { useGameMode } from '../globalHelpers/GameMode'
import { useMediaQuery } from '@mantine/hooks'
import { useScrollIntoView } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { ThemeToggle } from './ThemeToggle'

interface FormProps {
  email: string
}

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false)
  const [checked, setChecked] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [submissions, setSubmissions] = useState(false)
  const { isHardMode, toggleGameMode, isLocked } = useGameMode()
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  const icon = <IconHeartHandshake />

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const handleSubmit = async (values: FormProps) => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed')
      }
      form.reset()
      setSubmissions(false)
      setShowAlert(true)
      console.log('success')
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <>
      <Box className={css.header}>
        <div className={css.inner}>
          <div className={css.leftSection}>
            <Button
              component="a"
              href="https://www.paypal.com/ncp/payment/E5JPA56Y4TU82"
              target="_blank"
              variant="outline"
              leftSection={<IconRobot size={16} />}
              size="sm"
              mr="md"
            >
              Support The Game
            </Button>
          </div>
          <div className={css.rightSection}>
            <ActionIcon
              variant="outline"
              onClick={() => setSubmissions(!submissions)}
              size="lg"
            >
              <IconBulb size={32} />
            </ActionIcon>

            <ThemeToggle />

            <ActionIcon variant="outline" size="lg" onClick={toggle}>
              <IconQuestionMark size={28} />
            </ActionIcon>
          </div>
        </div>
      </Box>

      <Modal
        opened={submissions}
        onClose={() => setSubmissions(false)}
        fullScreen={isMobile ? true : false}
      >
        <Title order={2} fw={700} className={css.title}>
          Player-Created Puzzles Coming Soon!
        </Title>
        <List spacing="xs" size="sm" p="sm" center>
          <List.Item>
            <Text fz="sm" fw={500} className={css.title}>
              Design and submit your own{' '}
              <Text fs="italic" c="#46B1C9" span>
                themantics{' '}
              </Text>
              challenges.
            </Text>
          </List.Item>
          <List.Item>
            <Text fz="sm" fw={500} className={css.title}>
              Community puzzles will be featured every Monday & Friday.
            </Text>
          </List.Item>
          <List.Item>
            <Text fz="sm" fw={500} className={css.title}>
              Join our waiting list to be notified when submissions open!
            </Text>
          </List.Item>
        </List>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" variant="outline">
              Submit
            </Button>
          </Group>
        </form>
      </Modal>

      <Modal
        opened={opened}
        onClose={toggle}
        fullScreen={isMobile ? true : false}
      >
        <Title order={2} fw={700} className={css.title}>
          Game Play
        </Title>
        <Text fz="lg" fw={500} ml="sm" className={css.title}>
          Discover the theme of the day!
        </Text>
        <div className={css.section}>
          <List spacing="xs" size="sm" center>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="md">
                  <IconStarFilled style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <Text fz="md" ml="sm">
                Each{' '}
                <Text fw={700} span>
                  hint
                </Text>{' '}
                matches only one answer in the set, and all 4 sets match the
                theme of the day.
              </Text>
            </List.Item>
          </List>
        </div>

        <div className={css.section}>
          <List spacing="xs" size="sm" center listStyleType="none">
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="md">
                  <IconArrowBigRightFilled
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              <Box ml="sm">
                <Text fz="md" span>
                  Select your answer and tap{' '}
                  <Badge variant="outline" radius="sm">
                    submit
                  </Badge>{' '}
                  <Text span>or tap </Text>
                  <Badge variant="outline" radius="sm">
                    next
                  </Badge>{' '}
                  to skip to the next set.
                  <Text c="dimmed" fz="xs">
                    {' '}
                    *you get 1 free skip at the start of each game!
                  </Text>
                </Text>
              </Box>
            </List.Item>
          </List>
        </div>

        <div className={css.section}>
          <List spacing="xs" size="sm" center>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="md">
                  <IconCircleFilled
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              <Text fz="md" ml="sm">
                Each{' '}
                <Text fw={700} span>
                  dot
                </Text>{' '}
                represents a guess on your way to game winning success!
              </Text>
            </List.Item>
          </List>
        </div>

        <div className={css.section}>
          <List spacing="xs" size="sm" center>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="md">
                  <IconDiamondFilled
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              <Text fz="md" ml="sm">
                Impress your friends and family by guessing correctly with the
                fewest{' '}
                <Text fw={700} span>
                  skips
                </Text>{' '}
                possible!
              </Text>
            </List.Item>
          </List>
        </div>

        <div className={css.example}>
          <Text fw={600} ml="sm">
            Theme Examples:
          </Text>

          <List listStyleType="disc" withPadding>
            <List.Item mt="xs">
              Remove a letter to make a new word <br />
              <Text fs="italic" fw={500}>
                Hint
                <Text span fs="normal">
                  {' '}
                  = Chief
                </Text>
              </Text>
              <Text fs="italic" fw={500}>
                Answer
                <Text span fs="normal">
                  {' '}
                  = Chef
                </Text>
              </Text>
            </List.Item>
            <List.Item mt="sm">
              One to the other <br />
              <Text fs="italic" fw={500}>
                Hint
                <Text span fs="normal">
                  {' '}
                  = Red Water
                </Text>
              </Text>
              <Text fs="italic" fw={500}>
                Answer
                <Text span fs="normal">
                  {' '}
                  = Hot (Red Hot | Hot Water)
                </Text>
              </Text>
            </List.Item>
          </List>
        </div>

        <div className={css.example}>
          <Group gap="xs">
            <Switch
              disabled={isLocked}
              styles={{
                track: { cursor: 'pointer' },
              }}
              size="lg"
              color="teal"
              m="xs"
              aria-label="hard mode toggle"
              radius="lg"
              checked={isHardMode}
              onLabel="ON"
              offLabel="OFF"
              onChange={toggleGameMode}
              thumbIcon={
                checked ? (
                  <IconCheck
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={3}
                  />
                ) : (
                  <IconX
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={3}
                  />
                )
              }
            />
            {isLocked && (
              <Text size="xs" c="dimmed" style={{ fontStyle: 'italic' }}>
                Mode locked after game play begins
              </Text>
            )}
          </Group>
          <Text px="sm" py="xs">
            In hard mode, correct answers are not revealed after guessing, and
            viewing any set (even completed ones) counts as a skip.
          </Text>
        </div>
      </Modal>
      {showAlert ? (
        <Alert
          variant="light"
          color="green"
          icon={icon}
          withCloseButton
          closeButtonLabel="Dismiss"
          onClose={() => setShowAlert(false)}
        >
          Thanks for signing up and please consider a small contribution to help
          keep the themantics coming!
        </Alert>
      ) : null}
    </>
  )
}
