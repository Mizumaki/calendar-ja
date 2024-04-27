import path from "path";
import fs from "fs/promises";
import { range } from "./utils/range";
import { CalendarItem, Month, DayOfWeek } from "./type";

const TARGET_YEAR = process.argv[2];
if (!TARGET_YEAR) {
  throw new Error("Please pass TARGET_YEAR as argument");
}

type Calendar = {
  [month in number]: {
    [day in number]: CalendarItem;
  };
};

const monthList: Month[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const getLastDayOfMonth = (targetYear: number, targetMonth: number) => {
  return new Date(targetYear, targetMonth, 0).getDate();
};

const generateCalendar = async (targetYear: number): Promise<Calendar> => {
  const holidays = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), targetYear.toString(), "holidays.json"),
      "utf-8"
    )
  ) as { [date in string]?: string };

  const firstDayOfWeek = new Date(targetYear, 0, 1).getDay() as DayOfWeek;
  let currentDayOfWeek: DayOfWeek;
  const getNextDayOfWeek = () => {
    if (currentDayOfWeek === undefined) {
      currentDayOfWeek = firstDayOfWeek;
      return currentDayOfWeek;
    }
    const nextDayOfWeek = (currentDayOfWeek + 1) % 7;
    currentDayOfWeek = nextDayOfWeek as DayOfWeek;
    return currentDayOfWeek;
  };

  const calendar: Calendar = {};
  for (const month of monthList) {
    const calendarInMonth: Calendar[number] = {};
    const lastDayOfMonth = getLastDayOfMonth(targetYear, month);

    for (const day of range(1, lastDayOfMonth)) {
      const holidayLabel =
        holidays[
          `${targetYear}-${month.toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`
        ];
      const holidayInfo = holidayLabel
        ? ({
            isNationalHoliday: true,
            nationalHolidayName: holidayLabel,
          } as const)
        : ({ isNationalHoliday: false } as const);

      calendarInMonth[day] = {
        year: targetYear,
        month,
        day,
        dayOfWeek: getNextDayOfWeek(),
        isLastDayOfMonth: day === lastDayOfMonth,
        ...holidayInfo,
      };
    }
    calendar[month] = calendarInMonth;
  }
  return calendar;
};

const calendar = await generateCalendar(Number(TARGET_YEAR));
process.stdout.write(JSON.stringify(calendar));
