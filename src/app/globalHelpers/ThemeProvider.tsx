'use client'

import React, { useEffect, createContext, useContext } from 'react'
import { MantineProvider, createTheme } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'
import {
  Inter,
  Spectral,
  Libre_Baskerville,
  Source_Serif_4,
  JetBrains_Mono,
} from 'next/font/google'
// Create a context for the theme toggle function
interface ThemeContextType {
  toggleColorScheme: (value?: 'light' | 'dark') => void
  colorScheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType>({
  toggleColorScheme: () => {},
  colorScheme: 'light',
})

export const useThemeContext = () => useContext(ThemeContext)

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  components: {
    TextInput: {
      styles: {
        input: {
          fontSize: '16px',
        },
      },
    },
    // Apply to other input components as needed
  },
  /** Put your mantine theme override here */
})

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Use local storage hook to persist theme preference
  const [colorScheme, setColorScheme] = useLocalStorage<'light' | 'dark'>({
    key: 'color-scheme',
    defaultValue: 'light',
  })

  // Function to toggle color scheme
  const toggleColorScheme = (value?: 'light' | 'dark') => {
    const newColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(newColorScheme)
    // Update HTML attribute for CSS variables
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute(
        'data-mantine-color-scheme',
        newColorScheme
      )
    }
  }

  // Apply theme on initial load
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute(
        'data-mantine-color-scheme',
        colorScheme
      )
    }
  }, [colorScheme])

  return (
    <ThemeContext.Provider value={{ toggleColorScheme, colorScheme }}>
      <MantineProvider theme={theme}>
        <Notifications />
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  )
}
