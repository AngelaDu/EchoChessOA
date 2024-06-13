"use client"

import { useEffect, useState } from "react"
import { dummyData } from "./data"
import InputNewScore from "./input"
import ToggleTab from "./tab-toggle"
import DataChart from "./chart"
import { filterData } from "./filter"
import { env } from "process"
import { GameModes } from "./constants"

export default function Scoreboard() {
  const [filteredData, setFilteredData] = useState(dummyData)
  const [curTab, setTab] = useState(0)
  const [pageNum, setPageNum] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await filterData(curTab, pageNum, GameModes)

        setFilteredData(data.data)
        setCount(data.count)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [curTab, pageNum]) // Optional: Adjust dependencies if needed

  return (
    <section className='w-[100%] md:w-[450px] flex justify-center p-5'>
      <div className='flex flex-col gap-3 bg-light-bgLight dark:bg-dark-bgLight p-5 rounded max-w-[400px] md:max-w-[500px]'>
        {/* title */}
        <div className='bg-light-highlight text-white flex justify-center rounded p-3 pb-2 font-bold '>
          Scoreboard
        </div>

        {/* toggle tabs */}
        <ToggleTab
          curTab={curTab}
          setTab={setTab}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
        {/* data area */}
        <DataChart
          filteredData={filteredData}
          count={count}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />

        <InputNewScore
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          curTab={curTab}
          pageNum={pageNum}
        />
      </div>
    </section>
  )
}
