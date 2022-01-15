export const filteredArray = <T>(a: T[], b: T[]): T[] => {
  return a.filter((a) => b.some((b) => b === a));
};
