"use server"

import { sql } from "@vercel/postgres"
import { GameModes } from "./constants"
import { unstable_noStore } from "next/cache"

export async function filterData(curTab, pageNum) {
  unstable_noStore()

  try {
    var data
    var count

    if (curTab === GameModes.campaign) {
      data = await sql`
      SELECT * FROM campaign
      ORDER BY score DESC
      LIMIT 5 OFFSET ${pageNum * 5}`

      count = await sql`
      SELECT COUNT(*) as total_count FROM campaign
      `
    } else if (curTab === GameModes.skirmish) {
      data = await sql`
      SELECT * FROM skirmish
      ORDER BY score DESC
      LIMIT 5 OFFSET ${pageNum * 5}`

      count = await sql`
      SELECT COUNT(*) as total_count FROM skirmish
      `
    } else {
      data = await sql`
      SELECT * FROM arena
      ORDER BY score DESC
      LIMIT 5 OFFSET ${pageNum * 5}`

      count = await sql`
      SELECT COUNT(*) as total_count FROM arena
      `
    }

    console.log(curTab)

    return { data: data.rows, count: count.rows[0].total_count }
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch latest data")
  }
}
