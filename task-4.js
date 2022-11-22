const arr = ["apple pie", "texas barbecue", "tacos", "hot dogs"];

console.log("deleted elements", arr.splice(1, 2));

arr.splice(1, 0, "fish", "chips", "churros", "bbq ribs", "meatloaf");

arr.splice(arr.length, 0, "hamburger");

console.log("new array", arr);
