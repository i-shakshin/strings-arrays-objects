const str =
  "страшно, очень страшно, мы не знаем что это такое, если бы мы знали, что это такое, но мы не знаем, что это такое";

const arrOfWords = str.split(" ");

const wordsCount = new Map(
  [...new Set(arrOfWords)].map((x) => [
    x,
    arrOfWords.filter((y) => y === x).length,
  ])
);

console.log(wordsCount);
