/*<----------------------Масиви та об'єкти:--------------------------------->
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
let array1 = [1, 5, 10, 15, 20, true, false, 'string', 'hello', 'dream'];
console.log(array1);



/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

let book1 = {
    title: 'Red Dragon',
    pageCount: 398,
    genre: 'detective',
}
let book2 ={
    title: 'Process',
    pageCount: 299,
    genre: 'classic',
}
let book3 ={
    title: 'Blaze',
    pageCount: 238,
    genre: 'horror',
}
console.log(book1, book2, book3);



/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let book4 = {
    title: 'Den Kameradan',
    pageCount: 468,
    genre: 'classic',
    authors: [
        {name: 'Erich Maria Remarque', age: 72}
    ]
}
let book5 ={
    title: 'Misery',
    pageCount: 272,
    genre: 'horror',
    authors: [
        {name: 'Stephen King', age: 76}
    ]
}
let book6 ={
    title: 'Martin Iden',
    pageCount: 498,
    genre: 'classic',
    authors: [
        {name: 'Jack London', age: 40}
    ]
}
console.log(book4, book5, book6);



/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

let users=[
    {name: 'Arthur' ,username:'Ar2r' ,password:'artrdr'},
    {name: 'Irving' ,username:'Irwin' ,password:'irving31'},
    {name: 'Joseph' ,username:'JoeJoe' ,password:'sepht09'},
    {name: 'Erik' ,username:'R_IQ' ,password:'er88rick'},
    {name: 'Adrian' ,username:'SniperCS' ,password:'shoot76'},
    {name: 'Lucas' ,username:'Moura27' ,password:'LucMou27'},
    {name: 'Albert' ,username:'Mason' ,password:'Lookoncamera72'},
    {name: 'Robert' ,username:'Lokampb' ,password:'PatriciaHoll22'},
    {name: 'Vito' ,username:'Scaletta' ,password:'Barbar2'},
    {name: 'Eleonora' ,username:'LandorA' ,password:'11orA'},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)



/*- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу*/

let temperature = [
    {day: 'sunday', morning: 7, noon: 14, evening: 10},
    {day: 'monday', morning: 9, noon: 17, evening: 13},
    {day: 'tuesday', morning: 10, noon: 17, evening: 13},
    {day: 'wednesday', morning: 9, noon: 16, evening: 13},
    {day: 'thursday', morning: 11, noon: 21, evening: 17},
    {day: 'friday', morning: 10, noon: 20, evening: 16},
    {day: 'saturday', morning: 9, noon: 19, evening: 15},
]
console.log(temperature);



/*<-----------------------Логічні розгалуження:---------------------------------->
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x= 3;
if (x > 0){
    console.log('true')
}
else{
    console.log('false')
}



/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time= 15;
if (time <= 14 && time >= 0){
    console.log('first')
}
else if(time > 14 && time <= 29 ){
    console.log('second')
}
else if(time > 29 && time <= 44){
    console.log('third')
}
else if(time > 44 && time <= 59){
    console.log('fourth')
}
else {
    console.log('Error')
}



/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day= 31 ;
if (day < 11){
    console.log('first')
}
else if(day > 10 && day <21 ){
    console.log('second')
}
else if(day >20 && day <= 31){
    console.log('third')
}
else {
    console.log('Error')
}



/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let weekday = 6;
switch (weekday){
    case 1:
        console.log('meeting with president of France');
        break
    case 2:
        console.log('singing with frontmen of group BMTH');
        break
    case 3:
        console.log('playing football with Tony Kroos');
        break
    case 4:
        console.log('playing PC game');
        break
    case 5:
        console.log('cooking dinner');
        break
    case 6:
        console.log('recording song with Lady Gaga');
        break
    case 7:
        console.log('relax');
        break
    default:
        console.log('In one week only 7 days')
}



/*    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/

let number1=23;
let number2=23;
if (number1>number2){
    console.log(number1)
}
else if(number1<number2){
    console.log(number2)
}
else{
    console.log('numbers are equal')
}


/*    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).*/




/*    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
