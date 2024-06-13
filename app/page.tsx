import Image from "next/image"
import Scoreboard from "./(scoreboard)/scoreboard"
import ToggleButton from "./(helpers)/toggle-theme"
import { ThemeProvider } from "next-themes"

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <ToggleButton />
      <main className='align-center flex justify-center'>
        <Scoreboard />
      </main>
    </ThemeProvider>
  )
}
