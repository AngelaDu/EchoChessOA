"use client"

import { useEffect, useState } from "react"
import { filterData } from "./filter"
import { GameModes } from "./constants"
import { inputData, writeOverData } from "./inputData"

export default function InputNewScore({
  filteredData,
  setFilteredData,
  curTab,
  pageNum,
}) {
  const [player, setPlayer] = useState("")
  const [score, setScore] = useState("")
  const [submitted, setSubmitted] = useState(false)
  console.log(filteredData)

  useEffect(() => {
    const updateData = async () => {
      const scoreValue = parseInt(score, 10)
      const index = filteredData.findIndex((element) => element.name === player)

      console.log(curTab, player, scoreValue)
      try {
        if (index !== -1 && scoreValue > filteredData[index].score) {
          await writeOverData(curTab, player, scoreValue)
          filteredData[index].score = scoreValue
          filteredData[index].date = new Date()
        } else if (index === -1) {
          await inputData(curTab, player, scoreValue)
        }

        const data = await filterData(curTab, pageNum, GameModes)

        setFilteredData(data.data)
      } catch (error) {
        console.error("Failed to update data:", error)
      }
      setSubmitted(false)
    }

    if (submitted) {
      updateData()
    }
    setPlayer("")
    setScore("")
  }, [submitted])

  function handleClick() {
    if (isNaN(score)) {
      setPlayer("")
      setScore("")
      return
    }
    const index = filteredData.findIndex((element) => element.name === player)

    if (
      (index !== -1 && score > filteredData[index].score) ||
      (index == -1 && score != NaN && player != "")
    ) {
      setSubmitted(true)
    }

    // TODO set page correctly
    filterData(curTab, 0, GameModes)
  }

  const inputCSS = `rounded-sm font-normal text-slate-600 dark:text-dark-text bg-light-transparent outline outline-black 
                    p-1 pl-3 pr-3 w-1/2 md:w-[40%] focus-visible:outline-2 focus-visible:outline-light-highlight`

  return (
    <>
      <div className='flex gap-3'>
        {/* player */}
        <input
          value={player}
          placeholder='Player name...'
          className={inputCSS + " text-start"}
          onChange={(e) => setPlayer(e.target.value)}
        />
        {/* score */}
        <input
          value={score}
          placeholder={0}
          className={inputCSS + " text-end"}
          onChange={(e) => setScore(e.target.value)}
        />
        {/* accept */}
        <button
          onClick={handleClick}
          className='w-[30%] hidden md:block bg-light-highlight hover:bg-transparent hover:outline hover:text-light-highlight
         rounded p-1 outline outline-light-highlight transition-all hover:dark:bg-light-bg hover:dark:text-black'
        >
          Accept
        </button>
      </div>
      <button
        onClick={handleClick}
        className='w-full transition-all md:hidden bg-light-highlight hover:bg-light-transparent hover:outline hover:text-light-highlight
         rounded p-1 outline outline-light-highlight'
      >
        Accept
      </button>
    </>
  )
}
