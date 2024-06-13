"use server"
import { sql } from "@vercel/postgres"
import { GameModes } from "./constants"
import { unstable_noStore } from "next/cache"

export async function inputData(curTab, player, score) {
  try {
    const date = new Date()
    if (curTab === GameModes.campaign) {
      await sql`
        INSERT INTO campaign (name, score, date)
        VALUES (${player}, ${score}, ${date});`
    } else if (curTab === GameModes.skirmish) {
      await sql`
        INSERT INTO skirmish (name, score, date)
        VALUES (${player}, ${score}, ${date});`
    } else {
      await sql`
        INSERT INTO arena (name, score, date)
        VALUES (${player}, ${score}, ${date});`
    }
  } catch (error) {
    console.error("Error writing over data:", error)
    throw new Error("Failed to add new data")
  }
}

export async function writeOverData(curTab, player, score) {
  console.log("here: ", curTab, player, score)
  try {
    const currentDate = new Date()
    if (curTab === GameModes.campaign) {
      await sql`
      UPDATE campaign
      SET score = ${score}, date = ${currentDate}
      WHERE name = ${player};`
    } else if (curTab === GameModes.skirmish) {
       await sql`
      UPDATE skirmish
      SET score = ${score}, date = ${currentDate}
      WHERE name = ${player};`
    } else {
      await sql`
      UPDATE arena
      SET score = ${score}, date = ${currentDate}
      WHERE name = ${player};`
    }

    console.log("updated")
  } catch (error) {
    console.error("Error writing over data:", error)
    throw new Error("Failed to update data")
  }
}
