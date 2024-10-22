'use client'
import { useState } from 'react'
import { Container, Group, Burger, Image, ActionIcon, Box } from '@mantine/core'
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
    <Box className={css.header}>
      <Container size="md" className={css.inner}>
        {/* <MantineLogo size={28} /> */}

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </Box>
  )
}
