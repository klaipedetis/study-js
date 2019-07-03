let money = 250000;
let income = "вёрстка, такси, фотография";
let addExpenses = "налоги, машина, телефон";
let deposit = true;
let mission = 7100000;
let period = 8;

console.log(typeof(money), typeof(income), typeof(deposit));

console.log(income.length);

console.log(period + " " + "месяцев");
console.log("цель" + " "+ mission + " " + "Евро");
 

let budgetDay = money / 30;
console.log(budgetDay); 
console.log(money % budgetDay);
