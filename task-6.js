const str = "Мама мыла раму, рама мыла мыло, мыло… кхм, дальше не помню";

const result = str
  .replace("Мама", "Маша")
  .replace(/мыла/g, "ела")
  .replace(/мыло/g, "кошку");

console.log(result);
