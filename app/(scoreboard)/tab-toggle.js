import { useState } from "react"
import { filterData } from "./filter"
import { GameModes } from "./constants"

export default function ToggleTab({ curTab, setTab, pageNum, setPageNum }) {
  const tabs = ["Campaign", "Skirmish", "Arena"]

  return (
    <div className='flex w-full gap-2'>
      {tabs.map((day, index) => {
        return (
          <div
            key={day}
            className={`transition-colors flex-1 text-center py-2 text-sm sm:text-base cursor-pointer outline hover:outline-light-highlight
                      
            ${
              index === curTab
                ? "bg-light-highlight outline-light-highlight "
                : `bg-light-bg text-black outline-light-bg hover:text-light-highlight hover:bg-transparent hover:dark:bg-light-highlight hover:dark:text-white`
            }`}
            onClick={() => {
              filterData(index, pageNum, GameModes)
              setTab(index)
              setPageNum(0)
            }}
          >
            {day}
          </div>
        )
      })}
    </div>
  )
}
