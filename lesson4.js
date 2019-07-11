let money = prompt("Ваш месячный доход?"),
    income = alert("вёрстка, такси, фотография"),
    deposit = confirm("Есть ли у вас депозит в банке?"),
    mainCost = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
    sum = +prompt("Во сколько это Вам обойдётся?"),
    mainCost1 = prompt("“Какие обязательные ежемесячные расходы у вас есть?”"),
    sum1 = +prompt("Во сколько это Вам обойдётся?"),
    addExpenses = prompt("Перечислите возможные расходы \n за расчитывамый период через запятую");
mission = 710000;

console.log(addExpenses.split(", "));


let showTypeof = function (item) {
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let start = function () {
    do {
        money = prompt("Ваш месячный доход?");
        console.log(money);
    }
    while (isNaN(money) || money == "" || money == null);
    money = prompt("Ваш месячный доход?");
    console.log(money);

};




let budgetMonth = money - sum - sum1;


let budgetDay = budgetMonth / 30;
console.log(budgetDay);

if (budgetDay >= 0){
    console.log(budgetDay);
}else {
   return("что то пошло не так");
}


function getStatusIncome() {
    if (budgetDay < 300) {
        return ("Низкий уровень дохода");
    } else if (budgetDay <= 800) {
        return ("Средний уровень дохода");
    } else {
        return ("Высокий уровень дохода");
    }
}
console.log("getStatusIncome(): ", getStatusIncome());


let getExpensesMonth = function getExpensesMonth() {
    return sum + sum1;
}
while (isNaN(getExpensesMonth) || getExpensesMonth == "", getExpensesMonth == null);

console.log(getExpensesMonth());




let getAccumulatedMonth = function getAccumulatedMonth() {
    return money - getExpensesMonth();
}
console.log(getAccumulatedMonth());


function getTargetMonth() {

    console.log(Math.floor(mission / getAccumulatedMonth()));
};
getTargetMonth();

if (getTargetMonth() <= 0) {
  return("Цель не будет достигнута”);

} else if (getTargetMonth() >= 0) {
    return("Цель будет достигнута");
}

