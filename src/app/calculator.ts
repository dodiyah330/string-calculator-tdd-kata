export function add(numbers: string): number {
  if (numbers === "") return 0;
  if (!numbers.includes(",")) return parseInt(numbers);

  const numberArray = numbers.split(",").map(Number);
  return numberArray.reduce((sum, num) => sum + num, 0);
}
