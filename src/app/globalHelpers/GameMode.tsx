'use client'
import { useState, createContext, useContext } from 'react'

interface GameModeContextType {
  isEasyMode: boolean
  toggleGameMode: () => void
}

const GameModeContext = createContext<GameModeContextType>({
  isEasyMode: false,
  toggleGameMode: () => {},
})

export const GameModeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isEasyMode, setIsEasyMode] = useState(false)

  const toggleGameMode = () => setIsEasyMode((prev) => !prev)

  return (
    <GameModeContext.Provider value={{ isEasyMode, toggleGameMode }}>
      {children}
    </GameModeContext.Provider>
  )
}

export const useGameMode = () => {
  const context = useContext(GameModeContext)

  return context
}
