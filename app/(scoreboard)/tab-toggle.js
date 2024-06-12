import { useState } from "react"
import { filterData } from "./filter"

export default function ToggleTab({
  currentData,
  setFilteredData,
  curTab,
  setTab,
}) {
  const tabs = ["CAMPAIGN", "SKIRMISH", "ARENA"]

  return (
    <div className='flex w-full gap-2'>
      {tabs.map((day, index) => {
        return (
          <div
            key={day}
            className={`flex-1 hover:text-gray-600 hover:bg-gray-300 text-center py-2 cursor-pointe
            ${
              index === curTab
                ? "bg-light-highlight "
                : "bg-light-bg text-black"
            }`}
            onClick={() => {
              filterData(index, setFilteredData, currentData)
              setTab(index)
            }}
          >
            {day}
          </div>
        )
      })}
    </div>
  )
}
