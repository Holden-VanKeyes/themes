'use client'
import { ActionIcon } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react' // or your preferred icon library
import { useThemeContext } from '../globalHelpers/ThemeProvider'

export function ThemeToggle() {
  const { toggleColorScheme, colorScheme } = useThemeContext()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      size="lg"
    >
      {dark ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  )
}
