# Japanese Calendar

Japanese Calendar API easy to use.

Note that the data may not be accurate or the service may stop suddenly, so I recommend using this for personal use only.

## How to Use

```sh
# Get whole calendar of 2024
curl https://mizumaki.github.io/calendar-ja/2024/calendar.json
# Get all holidays in 2024
curl https://mizumaki.github.io/calendar-ja/2024/holidays.json

# Get specific day information
## e.g. 2/23 which is national holiday (天皇誕生日)
curl https://mizumaki.github.io/calendar-ja/2024/02/23.json
## e.g. 3/18 which is not national holiday
curl https://mizumaki.github.io/calendar-ja/2024/03/18.json
```

Each calendar item specification is here

| key | value type | description |
| :---: | :---: | :---: |
| year | number | e.g. 2024 |
| month | number | Range from 1 to 12 |
| day | number | e.g. 18 |
| dayOfWeek | number | Range from 0 to 6 <br> 0: Sunday, 1: Monday, ..., 6: Saturday |
| isLastDayOfMonth | boolean | Whether it is the last day of month or not |
| isNationalHoliday | boolean | Whether it is a national holiday (祝日) or not <br> Note that normal holiday like Sunday is not included |
| nationalHolidayName | string? | The name of national holiday <br> Exists only when `isNationalHoliday` is `true` |
