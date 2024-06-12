"use client"

import { useEffect, useState } from "react"
import { dummyData } from "./data"
import InputNewScore from "./input"
import ToggleTab from "./tab-toggle"
import DataChart from "./chart"
import { filterData } from "./filter"

export default function Scoreboard() {
  const [filteredData, setFilteredData] = useState(dummyData)
  const [curTab, setTab] = useState(0)
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    filterData(curTab, setFilteredData, pageNum)
  }, [])

  return (
    <section className='w-[100%] sm:w-[400px] flex justify-center p-5'>
      <div className='flex flex-col gap-3 bg-light-bgLight p-5 rounded max-w-[400px]'>
        {/* title */}
        <div className='bg-light-highlight text-white flex justify-center rounded p-3 pb-0 font-bold'>
          Scoreboard
        </div>

        {/* toggle tabs */}
        <ToggleTab
          setFilteredData={setFilteredData}
          curTab={curTab}
          setTab={setTab}
        />
        {/* data area */}
        <DataChart filteredData={filteredData} />
        <InputNewScore setFilteredData={setFilteredData} curTab={curTab} />
      </div>
    </section>
  )
}
