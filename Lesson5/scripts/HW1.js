/*ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
    - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

areasq = (a, b) => {
    if (a > 0 && b > 0) {
        let result1 = a * b;
        document.write(`square area: ${result1} if sides have lenght ${a} and ${b}</br>`);
    }
    else{
        document.write(`uncorrect</br>`);
    }
}
areasq(9, 8);



//- створити функцію яка обчислює та повертає площу кола з радіусом r
areacircle = (p, r) => {
    if (p > 0 && r > 0) {
        let result2 = p * r * r;
        document.write(`circle area: ${result2} if radius have ${r}</br>`);
    }
    else{
        document.write(`uncorrect</br>`);
    }
}
areacircle(3.14, 8);



//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
areacylind = (p, r, h) => {
    if (p > 0 && r > 0 && h > 0) {
        let result3 = 2 * p * r * h;
        document.write(`cylindr area: ${result3} if radius = ${r} and height = ${h}</br>`);
    }
    else{
        document.write(`uncorrect</br>`);
    }
}
areacylind(3.14, 4, 7);



//- створити функцію яка приймає масив та виводить кожен його елемент
loop = (array1) => {
    for (const item of array1) {
        document.write(`${item}, `);
    }
}
let array1 = [12, 'task5', 44, false, 27];

loop(array1);


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
p = (a) => {
    document.write(`<p>${a}</p>`);
}
p('<p>Example</p>');
p('<p>Example number 2</p>');



//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<ul>`)
li1 = (a1) => {
    document.write(`<li>${a1}</li>`);
}
li1('item1');
li1('item1');
li1('item1');
document.write(`</ul>`);



//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
li2 = (a2) => {
    document.write(`<ul>`);
    for (let i = 0; i < numberList; i++) {
        document.write(`<li>${a2}</li>`);
    }
    document.write(`</ul>`);
}
const numberList = 6;
li2('item2');




//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(`<ul>`)
loop2 = (array2) => {
    for (const item of array2) {
        document.write(`<li>${item}</li> `);
    }
}
let array2 = [12, 'task4', 442, false];

loop2(array2);
document.write(`</ul>`);




//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
loop3 = (users) => {
    for (const user of users) {
        document.write(`<div class="user">
        <div class="id">id: ${user.id}</div>
        <div class="name">name: ${user.name}</div>
        <div class="age">age: ${user.age}</div>
        </div>`);
    }
}
let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}];

loop3 (users);


//- створити функцію яка повертає найменьше число з масиву

minArr = (arr) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }
    }
        return min;

}
const arrNum = [91,12,6,27,34,2];
document.write(minArr(arrNum));
document.write(`<br>`);

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = [1,2,10,2,2,15];
sumArr = () => {
    let summ = 0;
    for (let elem of sum) {
        summ += elem;
    }
    return summ
}
document.write(sumArr(sum));
document.write(`<br>`);



/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
let numbers = [11,22,33,44];
swap = (arr, index1, index2) => {
    let indexRes = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = indexRes;
    return arr
}
document.write(swap(numbers, 0,3));
document.write(`<br>`);


/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/

exchange = (sumUAN, currencyValues, exchangeCurrency) => {
    for (let item of currencyValues) {
        if (exchangeCurrency === item.currency){
            resultValue = sumUAN / item.value;
        }
    }
    document.write(resultValue);
}

exchange (10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');