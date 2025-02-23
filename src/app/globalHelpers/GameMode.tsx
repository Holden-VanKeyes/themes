'use client'
import { useState, createContext, useContext, useEffect } from 'react'

interface GameModeContextType {
  isHardMode: boolean
  toggleGameMode: () => void
  isLocked: boolean
  setIsLocked: (locked: boolean) => void
}

const GameModeContext = createContext<GameModeContextType>({
  isHardMode: false,
  toggleGameMode: () => {},
  isLocked: false,
  setIsLocked: () => {},
})

export const GameModeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isHardMode, setIsHardMode] = useState(() => {
    if (typeof window !== 'undefined') {
      //   window.localStorage.clear()
      const storedMode = localStorage.getItem('hardMode')
      return storedMode === 'true'
    }
    return false
  })
  const [isLocked, setIsLocked] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLocked = localStorage.getItem('modeLocked')
      return storedLocked === 'true'
    }
    return false
  })
  const toggleGameMode = () => {
    if (!isLocked) {
      setIsHardMode((prev) => {
        const newMode = !prev
        localStorage.setItem('hardMode', newMode.toString())
        return newMode
      })
    }
  }

  // Update localStorage when lock state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('modeLocked', isLocked.toString())
    }
  }, [isLocked])

  return (
    <GameModeContext.Provider
      value={{ isHardMode, toggleGameMode, isLocked, setIsLocked }}
    >
      {children}
    </GameModeContext.Provider>
  )
}

export const useGameMode = () => {
  const context = useContext(GameModeContext)

  return context
}
