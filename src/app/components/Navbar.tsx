'use client'
import { useState } from 'react'
import {
  Container,
  Group,
  Burger,
  Image,
  ActionIcon,
  Box,
  Title,
  Card,
  Text,
  Modal,
  Switch,
  List,
  ThemeIcon,
  rem,
  Badge,
} from '@mantine/core'
import {
  IconStarFilled,
  IconQuestionMark,
  IconSquareDot,
  IconBulb,
  IconX,
  IconCheck,
  IconCircleFilled,
  IconArrowBigRightFilled,
  IconEyeFilled,
  IconDiamondFilled,
} from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import logo from '../assets/boaterslist-logo-horizontal-color-white.png'
import BoatersLogo from '../assets/boaters-logo.svg'
import css from './Navbar.module.css'
import Link from 'next/link'

const links = [
  { link: '/marketplace', label: 'Dock Users' },
  // { link: '/pricing', label: 'Pricing' },
  // { link: '/learn', label: 'Learn' },
  // { link: '/community', label: 'Community' },
]

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false)
  const [checked, setChecked] = useState(false)

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
          {/* <MantineLogo size={28} /> */}
          {/* <Title order={2}>THEMES</Title> */}

          {/* <Group gap={5} visibleFrom="xs">
          {items}
        </Group> */}

          <ActionIcon
            variant="outline"
            radius="lg"
            className={css.rules}
            onClick={toggle}
          >
            <IconQuestionMark />
          </ActionIcon>

          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
        </div>
      </Box>
      <Modal opened={opened} onClose={toggle} fullScreen>
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
          <List spacing="xs" size="sm" center>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="md">
                  <IconArrowBigRightFilled
                    style={{ width: rem(16), height: rem(16) }}
                  />
                </ThemeIcon>
              }
            >
              <Text fz="md" ml="sm">
                Select your answer and tap{' '}
                <span>
                  <Badge variant="outline" radius="sm">
                    submit
                  </Badge>{' '}
                </span>
                or tap{' '}
                <span>
                  <Badge variant="outline" radius="sm">
                    next
                  </Badge>{' '}
                  to skip to the next set.
                </span>{' '}
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
          </Text>
          {/* </List.Item>
          </List> */}
        </div>

        <div className={css.example}>
          <Switch
            size="lg"
            color="teal"
            m="sm"
            // label="easy mode"
            aria-label="easy mode toggle"
            radius="lg"
            checked={checked}
            onLabel="ON"
            offLabel="OFF"
            onChange={(event) => setChecked(event.currentTarget.checked)}
            thumbIcon={
              checked ? (
                <IconCheck
                  style={{ width: rem(18), height: rem(18) }}
                  color="green"
                  stroke={3}
                />
              ) : (
                <IconX
                  style={{ width: rem(18), height: rem(18) }}
                  color="grey"
                  stroke={3}
                />
              )
            }
          />
          <Text px="sm" py="xs">
            Easy mode shows you the correct answer for each set after submitting
            your guess.
          </Text>
        </div>
      </Modal>
    </>
  )
}
