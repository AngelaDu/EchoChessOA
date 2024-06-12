"use client"
import React from "react"
import { useTheme } from "next-themes"

const ToggleButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 
      transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 rounded-lg 
      absolute left-2 bottom-2 md:left-auto md:bottom-auto md:top-3 md:right-5'
    >
      Toggle Mode
    </button>
  )
}

export default ToggleButton
