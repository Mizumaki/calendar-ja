# How to add calendar

1. Prepare `holidays.json` for target year and put the file in `YYYY/holidays.json`
2. Run `scripts/generateCalendar.mts` and copy the stdout into `YYYY/calendar.json`
  - `npm run --silent generateCalendar --year=2024 >> 2024/calendar.json`
3. Run `scripts/touchCalendarItemFiles.mts`
  - `npm run touchCalendarItemFiles --year=2024`
