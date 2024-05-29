//1. Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms.form1;
    form1.onsubmit = function (e){
        e.preventDefault();
        let div = document.getElementsByClassName('task1')[0];
        let result = document.createElement('div');
        let username = this.username.value;
        let surname = this.surname.value;
        let age = this.age.value;
        result.innerText = `${username}, ${surname}, ${age}`;
        result.classList.add('result');
        div.appendChild(result);
    };


/*==========================
2. є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1*/
 let task2 = document.getElementById('task2');
 let currentPageNumber = localStorage.getItem('number');
 if(currentPageNumber===null){
     currentPageNumber = 0;
 }
 else{
     currentPageNumber = parseInt(currentPageNumber)+1;
 }
 localStorage.setItem('number', currentPageNumber);
 document.getElementById('task2');
     task2.innerText=currentPageNumber;

/*==========================
3. Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію*/


let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
let sessionsList = document.getElementById('task3');

sessions.forEach(function(session, index) {
    let listItem = document.createElement('p');
    listItem.textContent = 'Session ' + (index + 1) + ': ' + session;
    sessionsList.appendChild(listItem);
});
//ще частина коду в Index.html, результат замість в Sessions вирішив виводити в основний файл ))


/*
=========================
4. Зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
    При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів*/
let arrOneHundredItems = [
    {number: 'one'},{number: 'two'},{number: 'three'},{number: 'four'},{number: 'five'},{number: 'six'},{number: 'seven'},{number: 'eight'},{number: 'nine'},{number: 'ten'},
    {number: 'eleven'},{number: 'twelve'},{number: 'thirteen'},{number: 'fourteen'},{number: 'fifteen'},{number: 'sixteen'},{number: 'seventeen'},{number: 'eighteen'},{number: 'nineteen'},{number: 'twenty'},
    {number: 'twenty one'},{number: 'twenty two'},{number: 'twenty three'},{number: 'twenty four'},{number: 'twenty five'},{number: 'twenty six'},{number: 'twenty seven'},{number: 'twenty eight'},{number: 'twenty nine'},{number: 'thirty'},
    {number: 'thirty one'},{number: 'thirty two'},{number: 'thirty three'},{number: 'thirty four'},{number: 'thirty five'},{number: 'thirty six'},{number: 'thirty seven'},{number: 'thirty eight'},{number: 'thirty nine'},{number: 'forty'},
    {number: 'forty one'},{number: 'forty two'},{number: 'forty three'},{number: 'forty four'},{number: 'forty five'},{number: 'forty six'},{number: 'forty seven'},{number: 'forty eight'},{number: 'forty nine'},{number: 'fifty'},
    {number: 'fifty one'},{number: 'fifty two'},{number: 'fifty three'},{number: 'fifty four'},{number: 'fifty five'},{number: 'fifty six'},{number: 'fifty seven'},{number: 'fifty eight'},{number: 'fifty nine'},{number: 'sixty'},
    {number: 'sixty one'},{number: 'sixty two'},{number: 'sixty three'},{number: 'sixty four'},{number: 'sixty five'},{number: 'sixty six'},{number: 'sixty seven'},{number: 'sixty eight'},{number: 'sixty nine'},{number: 'seventy'},
    {number: 'seventy one'},{number: 'seventy two'},{number: 'seventy three'},{number: 'seventy four'},{number: 'seventy five'},{number: 'seventy six'},{number: 'seventy seven'},{number: 'seventy eight'},{number: 'seventy nine'},{number: 'eighty'},
    {number: 'eighty one'},{number: 'eighty two'},{number: 'eighty three'},{number: 'eighty four'},{number: 'eighty five'},{number: 'eighty six'},{number: 'eighty seven'},{number: 'eighty eight'},{number: 'eighty nine'},{number: 'ninety'},
    {number: 'ninety one'},{number: 'ninety two'},{number: 'ninety three'},{number: 'ninety four'},{number: 'ninety five'},{number: 'ninety six'},{number: 'ninety seven'},{number: 'ninety eight'},{number: 'ninety nine'},{number: 'one hundred'}
];
    let itemsPerPage = 10;
    let currentPage = 0;

    function displayItems(){
        let startIndex = currentPage * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;
        let currentPageItems = arrOneHundredItems.slice(startIndex, endIndex);

        document.getElementById('task4').innerText = '';

        currentPageItems.forEach(arrOneHundredItems =>{
            let itemElements = document.createElement('div');
            itemElements.innerText = `${arrOneHundredItems.number}`;
            itemElements.classList.add('task4El');
            document.getElementById('task4').appendChild(itemElements);
        });
    }
    document.addEventListener('DOMContentLoaded', () => displayItems());
function nextPage(){
    currentPage++
    if(currentPage>= Math.ceil(arrOneHundredItems.length / itemsPerPage)){
        currentPage = 0;
    }
    displayItems();
}
function prevPage(){
    currentPage--
    if(currentPage < 0) currentPage = Math.ceil(arrOneHundredItems.length / itemsPerPage) -1;
    displayItems();
    }



//5. Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let btn5 = document.getElementById('btn5');
let textBox = document.getElementById('text');

btn5.addEventListener('click', function (){
    textBox.style.display = 'none';
});



//6. Створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
 let form6 = document.forms.form6
    form6.onsubmit = function (e){
        e.preventDefault();
        let div = document.getElementsByClassName('task6')[0];
        let ageBox = document.createElement('div');
        let checkAge = this.checkAge.value;
        if(checkAge>17) {
            ageBox.innerText = `you have ${checkAge} years. Good Job`;
            ageBox.classList.add('checkAge');
            div.appendChild(ageBox);
        }
        else{
            ageBox.innerText = `page not found`;
            ageBox.classList.add('result');
            div.appendChild(ageBox);
        }
    };

/* 7.Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/
let form7 = document.forms.form7;
    form7.onsubmit = function (e){
        e.preventDefault();
        let lines = this.numberOfLines.value;
        let column = this.numberOfColumn.value;
        let content = this.content.value;
        let table = '<table>'
        for (let i = 0; i < lines; i++) {
            table += '<tr>'
            for (let j = 0; j < column; j++) {
                table += '<td>' +content + '</td>'
            }
            table += '</tr>'
        }
        table += '</table>'
        document.getElementById('task7').innerHTML = table;
    };




/*** 8.(подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
    зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
    При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/
document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо час останнього перезавантаження з localStorage
    let lastReloadTime = localStorage.getItem("lastReloadTime");

    // Якщо час останнього перезавантаження не був збережений або якщо минуло більше 10 секунд, то збільшуємо ціну
    if (!lastReloadTime || (Date.now() - lastReloadTime > 10000)) {
        let priceBlock = document.getElementById("task8");
        let currentPrice = parseFloat(priceBlock.innerText);
        let newPrice = currentPrice + 10;
        priceBlock.innerText = newPrice.toFixed(2) + "грн";

        // Зберігаємо час останнього перезавантаження
        localStorage.setItem("lastReloadTime", Date.now());
    }
});