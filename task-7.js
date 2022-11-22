const person = {
  name: "Igor",
  children: ["Maxim", "Ira"],
};

console.log(person.children);

const individ = person;

individ.children = ["Egor", "Nastya"];

console.log(person.children);
