export const range = (
  from: number,
  to: number,
  next?: (arg: number) => number
): number[] => {
  const res: number[] = [];

  const pushAndNext = (arg: number) => {
    if (arg <= to) {
      res.push(arg);
      const nextNum = next ? next(arg) : arg + 1;
      pushAndNext(nextNum);
    }
  };
  pushAndNext(from);

  return res;
};
