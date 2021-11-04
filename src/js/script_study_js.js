let answer = confirm("Вам есть 18?");
if(answer) {
    console.log("GO");    
} else {
    console.log("NOOOOO");
}
console.log(answer);

let answer2 = prompt("Вам есть 18?", "");
console.log(answer2);

console.log(4+4);

let isChecked = false, 
    isClosed = false;

console.log(isChecked && isClosed); // И - оба должгы быть true
console.log(isChecked || isClosed); // ИЛИ

if (2*4 == 8*1) { // == - сравнение
    console.log("Верно");
} else {
    console.log("FUCK");
}

const num = 50;
if (num < 49) {
    console.log('NOT TRUE');
} else if (num > 100) {
    console.log("MANY");
} else {
    console.log("YEEEEE");
}

for(let i = 1; i < 8; i++) {
    console.log(i);
}

function loging(a) {
    console.log(a);
}

loging(234);