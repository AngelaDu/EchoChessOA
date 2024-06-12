import { sql } from "@vercel/postgres"
import { GameModes } from "./constants"
import { unstable_noStore } from "next/cache"

export async function filterData(curTab, setFilteredData, pageNum) {
  unstable_noStore()

  // try {
  //   var table
  //   switch (curTab) {
  //     case GameModes.CAMPAIGN:
  //       table = "CAMPAIGN"
  //       break
  //     case GameModes.SKIRMISH:
  //       table = "SKIRMISH"
  //       break
  //     case GameModes.ARENA:
  //       table = "ARENA"
  //       break
  //     default:
  //       console.log("game mode does not exist")
  //   }

  //   const data = await sql`SELECT * FROM ${table}
  //         ORDER BY date DESC
  //         LIMIT 5 OFFSET ${5 * pageNum};`

  //   setFilteredData(data)
  // } catch (error) {
  //   console.error("Database Error:", error)
  //   throw new Error("Failed to fetch latest data")
  // }
  try {
    console.log({
      POSTGRES_URL: process.env.POSTGRES_URL,
      POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    })
    const data = await sql`SELECT * FROM ARENA`
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch latest data")
  }
}
