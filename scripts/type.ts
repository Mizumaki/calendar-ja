export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0: Sunday, 1: Monday, ..., 6: Saturday
export type CalendarItem = {
  year: number;
  month: Month;
  day: number;
  dayOfWeek: DayOfWeek;
  isLastDayOfMonth: boolean;
} & (
  | {
      isNationalHoliday: false;
    }
  | {
      isNationalHoliday: true;
      nationalHolidayName: string;
    }
);

export type Calendar = {
  "1": {
    [day in string]: CalendarItem;
  };
  "2": {
    [day in string]: CalendarItem;
  };
  "3": {
    [day in string]: CalendarItem;
  };
  "4": {
    [day in string]: CalendarItem;
  };
  "5": {
    [day in string]: CalendarItem;
  };
  "6": {
    [day in string]: CalendarItem;
  };
  "7": {
    [day in string]: CalendarItem;
  };
  "8": {
    [day in string]: CalendarItem;
  };
  "9": {
    [day in string]: CalendarItem;
  };
  "10": {
    [day in string]: CalendarItem;
  };
  "11": {
    [day in string]: CalendarItem;
  };
  "12": {
    [day in string]: CalendarItem;
  };
};
