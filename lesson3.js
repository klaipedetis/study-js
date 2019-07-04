//"
//ветвление
/*

Если (жарко){
     одеваем шорты;
     одеваем майку;
} иначе {
    одеваем джинсы;
    одеваем куртку
     } 



// if (true) console.log("Истина");
// if (falce) console.log("Этот код не выполнится");

*/

let n = 3;
if (n === 5){
    console.log("command 1");
    
}else if(n === 4){
    console.log("command 2");
}else {
    console.log("command 3");
}

switch (4) {
    case 3:
    case 4: 
    case 5:
        console.log("3-5");
        break;
    case 6:
        console.log(7);
        break; // stopped working cikle
    default:
        console.log("не верно")
}

// тринарный оператор

let result = n === 3 ? 1:0;
console.log("result", result);