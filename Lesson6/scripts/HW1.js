/* 1. - Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
let strHW1 = 'hello world';
let strLI1= 'lorem ipsum';
let strJIC1= 'javascript is cool';
    document.write(strHW1.length);
    document.write(`<br>`);
    document.write(strLI1.length);
    document.write(`<br>`);
    document.write(strJIC1.length);
    document.write(`<br>`);
/*2. - Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
let strHW2 = 'hello world';
let strLI2= 'lorem ipsum';
let strJIC2= 'javascript is cool';
    document.write(strHW2.toUpperCase());
    document.write(' ');
    document.write(strLI2.toUpperCase());
    document.write(' ');
    document.write(strJIC2.toUpperCase());
    document.write(`<br>`);


/*3. - Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
let strHW3 = 'HELLO WORLD';
let strLI3= 'LOREM IPSUM';
let strJIC3= 'JAVASCRIPT IS COOL';
    document.write(strHW3.toLowerCase());
    document.write(' ');
    document.write(strLI3.toLowerCase());
    document.write(' ');
    document.write(strJIC3.toLowerCase());
    document.write(`<br>`);


// 4. - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty string   ';
    document.write(dirtyString.substring(1,13));


/* 5. - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

    let str = 'Ревуть воли як ясла повні';
    let arr = str.split(' ');
    console.log(arr);


// 6. - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numberArr = [10,8,-7,55,987,-1011,0,1050,0]
    let map = numberArr.map(index =>{return index = index.toString()});
    console.log(map)


/* 7. - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/
let nums = [11, 21 ,3];
function sortNums (nums, direction) {
    if (direction ==='ascending'){
        nums.sort((index1, index2) => index1 - index2);}
    if (direction ==='descending'){
        nums.sort((index1, index2) => index2 - index1);
    }
    console.log(nums);
    }

sortNums(nums,'ascending');
sortNums(nums,'descending');
//==========================
// 8. - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((direction1, direction2) => direction2.monthDuration - direction1.monthDuration);
console.log(coursesAndDurationArray)


//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    let filterDuration = coursesAndDurationArray.filter(objOfArr => {
        return objOfArr.monthDuration > 5
});
    console.log(filterDuration);


//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration} */
    let coursesAndDurationArrNew= coursesAndDurationArray.map((direction, index) =>{({id: index + 1,...direction})
        let newDirection = {id: index + 1,...direction}

       return newDirection;
    })
    console.log(coursesAndDurationArrNew);


//=========================
/* 9.  описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/



//=========================

/*  10.  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}*/




//=========================
/*  11.  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker*/

/*let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];*/
