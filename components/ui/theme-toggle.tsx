'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from './button'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
    
    // Dispatch custom event for theme change
    window.dispatchEvent(new Event('themeChanged'))
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-background/50 backdrop-blur-sm border-border hover:bg-muted/50 cursor-pointer"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 