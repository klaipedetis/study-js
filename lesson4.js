let money = prompt("Ваш месячный доход?"),
    income = alert("вёрстка, такси, фотография"),
    deposit = confirm("“Есть ли у вас депозит в банке?”"),
    mainCost = prompt("“Какие обязательные ежемесячные расходы у вас есть?”"),
    sum = prompt("Во сколько это Вам обойдётся?"),
   
    sum1 = prompt("Во сколько это Вам обойдётся?"),
    addExpenses = prompt("Перечислите возможные расходы \n за расчитывамый период через запятую");
    mission = 710000;

console.log(addExpenses.split(", "));
console.log(typeof (money), typeof (income), typeof (deposit));

let showTypeof = function () {
    console.log("item", typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);



let budgetMounth = money - sum - sum1;
console.log(budgetMounth);
console.log(Math.ceil(mission / budgetMounth));

let budgetDay = budgetMounth / 30;
console.log(Math.floor(budgetDay));

function getStatusIncome(){
    if (budgetDay < 300){
        return("Низкий уровень дохода");
    } else if (budgetDay <=800) {
        return("Средний уровень дохода");
    } else {
        return("Высокий уровень дохода");
    }
}
console.log("getStatusIncome(): ", getStatusIncome());


       let getexpensesMounth = function getExpensesMounth() {
            console.log(money + sum + sum1);
        }
        
        getExpensesMounth();

        let getAccumulatedMonth = function getAccumulatedMonth() {
                console.log(getAccumulatedMonth - budgetMounth);
        }

        getAcumulatedMouth();
        
        function getTargetMouth(){
            console.log(Math.floor(mission / getAccumulatedMonth));
        };
            getTargetMouth();

