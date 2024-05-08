/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
function areasq(a, b){
   let result1 = a*b;
    document.write(`square area: ${result1}</br>`);
}
areasq(5, 8);

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
function areacircle(p, r){
    let result2 = p*r*r;
    document.write(`circle area: ${result2}</br>`);
}
areacircle(3.14, 6);


/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
function areacylind(p, r, h){
    let result3 = 2*p*r*h;
    document.write(`cylindr area: ${result3}</br>`);
}
areacylind(3.14, 6, 10);



/*- створити функцію яка приймає масив та виводить кожен його елемент*/
function loop(arrayt4){
    for (const item of arrayt4) {
        document.write(`${item}, `);
    }
}
let array = [12, 'task4', 442, false];

loop(array)
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
function p(a){
    document.write(`<p>${a}</p>`);
}
p('forExample')
p('andAgain')


/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
document.write(`<ul>`)
function li1(a1){
    document.write(`<li>${a1}</li>`);
}
li1('item')
li1('item')
li1('item')
document.write(`</ul>`)


/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
document.write(`<ul>`)
for (let i = 0; i < 3; i++){
    function li2(a2){
        document.write(`<li>${a2}</li>`);

    }
    li2('item2')
}

document.write(`</ul>`)



/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
document.write(`<ul>`)
function li3(){

    document.write(`<li>${a}</li>`);
}
li3('item')
li3('item')
li3('item')
document.write(`</ul>`)




/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/



/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/



/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/



/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/