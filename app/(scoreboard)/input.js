"use client"

import { useState } from "react"
import { filterData } from "./filter"

export default function InputNewScore({
  filteredData,
  setFilteredData,
  curTab,
}) {
  const [player, setPlayer] = useState("")
  const [score, setScore] = useState("")

  function handleClick() {
    if (isNaN(score)) {
      setPlayer("")
      setScore("")
      return
    }
    const index = filteredData.findIndex((element) => element.name === player)
    const scoreValue = parseInt(score, 10)
    const updatedData = [...filteredData]

    if (index !== -1) {
      if (score > filteredData[index].score) {
        updatedData[index].score = scoreValue
        updatedData[index].date = new Date()
      }
    } else {
      updatedData.push({ name: player, score: scoreValue, date: new Date() })
    }
    setFilteredData(updatedData)
    filterData(curTab, setFilteredData, updatedData)
    setPlayer("")
    setScore("")
  }

  const inputCSS =
    "rounded-sm font-normal text-slate-600 bg-transparent outline outline-black p-1 pl-3 pr-3 w-1/2 md:w-[40%] focus-visible:outline focus:outline-light-highlight"

  return (
    <>
      <div className='flex gap-3'>
        {/* player */}
        <input
          value={player}
          placeholder='Player name...'
          className={inputCSS + "text-start"}
          onChange={(e) => setPlayer(e.target.value)}
        />
        {/* score */}
        <input
          value={score}
          placeholder={0}
          className={inputCSS + "outline text-end"}
          onChange={(e) => setScore(e.target.value)}
        />
        {/* accept */}
        <button
          onClick={handleClick}
          className='w-[30%] hidden md:block bg-light-highlight hover:bg-transparent hover:outline hover:text-light-highlight
         rounded p-1 outline outline-light-highlight'
        >
          Accept
        </button>
      </div>
      <button
        onClick={handleClick}
        className='w-full  md:hidden bg-light-highlight hover:bg-transparent hover:outline hover:text-light-highlight
         rounded p-1 outline outline-light-highlight'
      >
        Accept
      </button>
    </>
  )
}
