let timeNow = new Date();

let horas = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
let minutos = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
let segundos = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();
console.log(horas, minutos, segundos);


function GenerateFibonacci(minutos, segundos) {
    let x = Math.trunc(minutos / 10);
    let y = minutos / 10;
    pos = y.toString().indexOf(".");
    res = String(y).substring((pos + 1), y.length);
    var fibonacci = [];
    fibonacci[0] = x;
    fibonacci[1] = res;
    for (var i = 2; i < segundos; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}
var f = GenerateFibonacci(segundos);
console.log(f);