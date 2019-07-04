
let money = prompt("Ваш месячный доход?");
console.log(money);

let mainCost = prompt("“Какие обязательные ежемесячные расходы у вас есть?”");
console.log(mainCost);
let sum = prompt("Во сколько это обойдется?");
console.log(sum);

let mainCost1 = prompt("“Какие обязательные ежемесячные расходы у вас есть?”");
console.log(mainCost1);
let sum1 = prompt("Во сколько это обойдется?");
console.log(sum);

let budgetMonth =  money - sum - sum1;
console.log(budgetMonth);
let budgetDay = budgetMonth / 30;
console.log(budgetDay);

/*Расчитываем за сколько месяцев будет достигнута миссия:
mision / budgetMonth*/

let mission = 7100000;
console.log(Math(mission / budgetMonth));



let deposit = prompt("“Есть ли у вас депозит в банке?”");
console.log(Boolean (deposit));
 
let addExpenses = prompt("Перечислите возможные расходы \n за расчитывамый период через запятую");
console.log(addExpenses)
console.log(typeof addExpenses);

let money = +prompt("Ваш месячный доход?");
console.log(typeof money);

let mainCost1 = prompt("“Какие обязательные ежемесячные расходы у вас есть?”");
console.log(typeof mainCost1);


let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

if (budgetDay >= 800) console.log(confirm("Высокий уровень дохода"));
if budgetDay 300 >= 800 console.log(confirm("Средний уровень дохода"));
if (budgetDay <= 300) console.log(confirm("Низкий уровень дохода"));
if (budgetDay <= 0) console.log(confirm("Что то пошло не так"));
