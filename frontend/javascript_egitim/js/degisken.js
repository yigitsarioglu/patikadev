
// var ile degisken tanımlama

var servername = "api.kodluyoruz.org"

console.log(servername)


// let ile değişkene bilgi atayarak tanımlama

let password = "1234";
console.log(password)


// const ile değişken tanımlama

const SERVER_PASSWORD = "thisisserver12345"
console.log(SERVER_PASSWORD)

// Boolean veri tipi örneği
var x = 1;
console.log(Boolean(x)); // returns true
var y = 0;
console.log(Boolean(y)); // returns false

console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));

let a; 
console.log("let undefined sonucu: ", Boolean(a) ) ;


var w = false || 0;
console.log(Boolean(w));


var xx = true; 
console.log("sonucu" , Boolean(xx));


var xc = 10 / 'a' ;
console.log( Boolean(xc) )


