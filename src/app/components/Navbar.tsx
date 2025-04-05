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
  Flex,
} from '@mantine/core'
import {
  IconStarFilled,
  IconQuestionMark,
  IconInfoCircle,
  IconInfoSmall,
  IconBrandPaypal,
  IconCash,
  IconRobot,
  IconRobotFace,
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

const links = [
  { link: '/marketplace', label: 'Dock Users' },
  // { link: '/pricing', label: 'Pricing' },
  // { link: '/learn', label: 'Learn' },
  // { link: '/community', label: 'Community' },
]

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false)
  const [checked, setChecked] = useState(false)
  const { isHardMode, toggleGameMode, isLocked } = useGameMode()
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const [active, setActive] = useState(links[0].link)

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={css.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link)
      }}
    >
      {link.label}
    </Link>
  ))

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
            {/* <ActionIcon
              variant="transparent"
              className={css.rules}
              // onClick={toggle}

              size="lg"
            >
              <IconBulb size={32} />
            </ActionIcon> */}

            <ActionIcon
              variant="outline"
              radius="lg"
              className={css.rules}
              onClick={toggle}
            >
              <IconQuestionMark size={28} />
            </ActionIcon>
          </div>
        </div>
      </Box>
      <></>

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
              <Text fz="md" ml="sm" span>
                Select your answer and tap{' '}
                <Badge variant="outline" radius="sm">
                  submit
                </Badge>{' '}
                or tap{' '}
                <Badge variant="outline" radius="sm">
                  next
                </Badge>{' '}
                to skip to the next set.
              </Text>
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
                  = Alter Trip
                </Text>
              </Text>
              <Text fs="italic" fw={500}>
                Answer
                <Text span fs="normal">
                  {' '}
                  = Ego (Alter Ego | Ego Trip)
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
    </>
  )
}
