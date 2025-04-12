'use client'

import React, { useEffect, createContext, useContext } from 'react'
import { MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

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
      <MantineProvider>{children}</MantineProvider>
    </ThemeContext.Provider>
  )
}
