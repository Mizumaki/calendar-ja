import path from "path";
import fs from "fs/promises";
import { Calendar } from "./type";

const TARGET_YEAR = process.argv[2];
if (!TARGET_YEAR) {
  throw new Error("Please pass TARGET_YEAR as argument");
}
const cwd = process.cwd();

const touchCalendarItemFiles = async (targetYear: number) => {
  const calendar = JSON.parse(
    await fs.readFile(path.join(cwd, TARGET_YEAR, "calendar.json"), "utf-8")
  ) as Calendar;

  for (const [month, calendarItems] of Object.entries(calendar)) {
    for (const [day, calendarItem] of Object.entries(calendarItems)) {
      const filePath = path.join(
        cwd,
        targetYear.toString(),
        month.padStart(2, "0"),
        `${day.padStart(2, "0")}.json`
      );
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(calendarItem), {
        flag: "w",
      });
    }
  }
};

touchCalendarItemFiles(Number(TARGET_YEAR));
