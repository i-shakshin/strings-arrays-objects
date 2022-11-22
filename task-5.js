const str =
  "ННе ттттолльккккко лишшшшььььь всссссе могуттттт сделллллать этттто";

const uniqStr = Array.from(new Set(str.split(" ").join(""))).join(" ");

console.log(uniqStr);
