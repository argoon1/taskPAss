export function generateHiddenPasswordIndexes(password: string): number[] {
  const passwordLength = password.length;
  const end = 2 + Math.floor((Math.random() * (passwordLength - 1)) / 2);

  const numbers = new Set();

  while (numbers.size < end) {
    const randomNumber = Math.floor(Math.random() * passwordLength);
    numbers.add(randomNumber);
  }

  return Array.from(numbers).sort() as number[];
}
export function getPasswordInputMessage(
  password: string,
  answerPasswordArr: string[],
  hiddenIdx: number[]
) {
  const answerPasswordString = answerPasswordArr.join("");
  const correctAnswerPasswordFields = password
    .split("")
    .filter((_, idx) => !hiddenIdx.includes(idx))
    .join("");
  if (correctAnswerPasswordFields.length === answerPasswordString.length) {
    if (correctAnswerPasswordFields === answerPasswordString)
      return "your password is correct";

    return "your password is wrong";
  }
  return "";
}
