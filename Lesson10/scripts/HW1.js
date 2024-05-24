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
        div.appendChild(result)
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

 document.getElementById('task2').innerText=currentPageNumber;

/*==========================
3. Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
Код прописав в відповідних сторінках*/


/*
=========================
4. Зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
    При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів*/
let arrOneHundredItems = [
    {number: 'one'},{number: 'two'},{number: 'three'},{number: 'four'},{number: 'five'},{number: 'six'},{number: 'seven'},{number: 'eight'},{number: 'nine'},{number: 'zero'},
    {number: 'one1'},{number: 'two1'},{number: 'three1'},{number: 'four1'},{number: 'five1'},{number: 'six1'},{number: 'seven1'},{number: 'eight1'},{number: 'nine1'},{number: 'zero1'},
    {number: 'one2'},{number: 'two2'},{number: 'three2'},{number: 'four2'},{number: 'five2'},{number: 'six2'},{number: 'seven2'},{number: 'eight2'},{number: 'nine2'},{number: 'zero2'},
    {number: 'one3'},{number: 'two3'},{number: 'three3'},{number: 'four3'},{number: 'five3'},{number: 'six3'},{number: 'seven3'},{number: 'eight3'},{number: 'nine3'},{number: 'zero3'},
    {number: 'one4'},{number: 'two4'},{number: 'three4'},{number: 'four4'},{number: 'five4'},{number: 'six4'},{number: 'seven4'},{number: 'eight4'},{number: 'nine4'},{number: 'zero4'},
    {number: 'one5'},{number: 'two5'},{number: 'three5'},{number: 'four5'},{number: 'five5'},{number: 'six5'},{number: 'seven5'},{number: 'eight5'},{number: 'nine5'},{number: 'zero5'},
    {number: 'one6'},{number: 'two6'},{number: 'three6'},{number: 'four6'},{number: 'five6'},{number: 'six6'},{number: 'seven6'},{number: 'eight6'},{number: 'nine6'},{number: 'zero6'},
    {number: 'one7'},{number: 'two7'},{number: 'three7'},{number: 'four7'},{number: 'five7'},{number: 'six7'},{number: 'seven7'},{number: 'eight7'},{number: 'nine7'},{number: 'zero7'},
    {number: 'one8'},{number: 'two8'},{number: 'three8'},{number: 'four8'},{number: 'five8'},{number: 'six8'},{number: 'seven8'},{number: 'eight8'},{number: 'nine8'},{number: 'zero8'},
    {number: 'one9'},{number: 'two9'},{number: 'three9'},{number: 'four9'},{number: 'five9'},{number: 'six9'},{number: 'seven9'},{number: 'eight9'},{number: 'nine9'},{number: 'zero9'}
];
    let div = document.getElementsByClassName('task4')[0];




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