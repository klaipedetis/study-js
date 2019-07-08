let money = prompt("Ваш месячный доход?"),
    income = promt("вёрстка, такси, фотография"),
    deposit = confirm("“Есть ли у вас депозит в банке?”"),
    mainCost = prompt("“Какие обязательные ежемесячные расходы у вас есть?”"),
    sum = prompt("Во сколько это Вам обойдётся?"),
    mainCost = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
    sum1 = prompt("Во сколько это Вам обойдётся?"),
    addExpenses = prompt("Перечислите возможные расходы \n за расчитывамый период через запятую");
mission = 710000;

console.log(addExpenses.split(", "));
console.log(typeof (money), typeof (income), typeof (deposit));

let showTypeof = function () {
    console.log(item, typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log(money);
console.log(mainCost);
console.log(sum);
console.log(sum1);

let budgetMounth = money - sum - sum1;
console.log(budgetMounth);
console.log(Math.ceil(mission / budgetMonth));

let dudgetDay = budgetMounth / 30;
console.log(Math.floor(budgetDay));

function getStatusIncome() {
    if (budgetDay >= 800) {
        console.log(("Высокий уровень дохода"));
    } else if ((budgetDay >= 300) && (budgetDay <= 800)) {
        return("Средний уровень дохода");
    } else if (budgetDay <= 300) {
       return("Низкий уровень дохода");
        }
        else if (budgetDay <= 0) {
         return("Что то пошло не так");
        }

    }
    console.log("getStatusIncome(): ", getStatusIncome());
