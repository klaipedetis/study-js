
let money = prompt("Ваш месячный доход?");
console.log(money);
console.log(typeof money);


let addExpenses = prompt("Перечислите возможные расходы \n за расчитывамый период через запятую");
console.log(addExpenses)
console.log(typeof addExpenses);


let deposit = prompt("“Есть ли у вас депозит в банке?”");
console.log(Boolean (deposit));
  

let mainCost = prompt("“Какие обязательные ежемесячные расходы у вас есть?”");
console.log(mainCost);
let sum = prompt("Во сколько это обойдется?");
console.log(sum);

let mainCost1 = prompt("“Какие обязательные ежемесячные расходы у вас есть?”");
console.log(mainCost1);
let sum1 = prompt("Во сколько это обойдется?");
console.log(sum);


let budgetMonth =  money - addExpenses + sum + sum1;
console.log(budgetMonth);





