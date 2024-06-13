export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEnd);
    numbers = numbers.substring(delimiterEnd + 1);
  }

  const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

  const negativeNumbers = numberArray.filter((n) => n < 0);
  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}
