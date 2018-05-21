
// 1
let srt = 'tseb sht si sj';
let newStr = '';

for ( let i = 0; i = str.length; i-- ) newStr += str[i];
console.log(newStr)

// 2 Строка Перевертыш

let srt = 'tseb sht si sj';
let newStr = '';
for ( let i = 0; i = str.length; i-- ) newStr += str[i];
console.log(newStr)

// 3 Факториал числа 10

 let num = 1;
 for (let i = 1; i <= 10; i++){
   num *= i;
 }
 console.log(num)

//// 4 Считаем до 10
let  num = '';
for(let i = 1; i <= 10; i++ ){
    num += (i == 10) ? i : i + ',';
}
console.log(num);

//// 5

 let str = "JavaScript is a pretty good language";
 let newStr = "";
 for (let i = 0; i < str.length; i++) {
     if (str[i] === " ") newStr += str[i].toUpperCase();
     else  newStr += str[i]
 }
 console.log(newStr);

// 6  Нечетные числа от 1 до 15
 for (i = 1; i <= 15; i++) {
     if ( i%2 )  console.log(i);
 }