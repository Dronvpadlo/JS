/*-1.1 Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
-1.2 Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
-1.3 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
console.log('1.1 Створити функцію конструктор для об\'єктів User з полями id, name, surname , email, phone\n' +
    'створити пустий масив, наповнити його 10 об\'єктами new User(....)')
function User (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;

}


let users = [
    new User(1, 'Arthyr', 'Morgan', 'mirg23@imail.uk' , '231-323-3242'),
    new User(3, 'Nico', 'Bellic', 'bellicnic@imail.uk', '231-323-3048'),
    new User(2, 'Martin', 'Eden', 'writertop3@imail.uk', '231-323-3114'),
    new User(4, 'Godfried', 'Lens', 'lencegersold48@imail.uk', '231-323-3881'),
    new User(7, 'Joseph', 'Gilgun', 'brassic24@imail.uk', '231-323-3007'),
    new User(6, 'Clariss', 'Sratlink', 'detectivepriv@imail.uk', '231-323-3114'),
    new User(5, 'Lilend', 'Gont', 'goofthings223@imail.uk', '231-323-3334'),
    new User(8, 'Wolf', 'Larsen', 'seawolf1911@imail.uk', '231-323-3181'),
    new User(9, 'Ludvig', 'Bodmer', 'berlinpoems2@imail.uk', '231-323-3098'),
    new User(10, 'Henry', 'Tomasino', 'mafiagangst2@imail.uk', '231-323-3007')];
console.log(users);


console.log('1.2 Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об\'єкти з парними id (filter)');
users.filter(user => {if (user.id % 2 === 0){console.log(user);}
});



console.log('1.3 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)');
let sortUsers = users.sort((id1, id2) => id1.id - id2.id);
console.log(sortUsers);
console.log('________________________________________________')


/*-2.1 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
console.log('створити класс для об\'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)\n' +
    'створити пустий масив, наповнити його 10 об\'єктами Client')
class Client{
        constructor(id, name, surname , email, phone, order) {
                this.id = id;
                this.name = name;
                this.surname = surname;
                this.email = email;
                this.phone = phone;
                this.order = order;

        }

}



let clients = [
    new Client(1, 'Arthyr', 'Morgan', 'mirg23@imail.uk', '231-323-3242',['burbon', 'krekers', 'cigarettes'] ),
    new Client(3, 'Nico', 'Bellic', 'bellicnic@imail.uk', '231-323-3048', ['juice', 'glasses']),
    new Client(2, 'Martin', 'Eden', 'writertop3@imail.uk', '231-323-3114', ['tomato', 'pen', 'notes', 'newspaper', 'bread']),
    new Client(4, 'Godfried', 'Lens', 'lencegersold48@imail.uk', '231-323-3881', ['rum', 'beef meat', 'bread']),
    new Client(7, 'Joseph', 'Gilgun', 'brassic24@imail.uk', '231-323-3007', ['beer', 'car toy', 'cigarettes']),
    new Client(6, 'Clariss', 'Sratlink', 'detectivepriv@imail.uk', '231-323-3114', ['schampoo', 'beer']),
    new Client(5, 'Lilend', 'Gont', 'goofthings223@imail.uk', '231-323-3334', ['magazine']),
    new Client(8, 'Wolf', 'Larsen', 'seawolf1911@imail.uk', '231-323-3181', ['whiskey', 'spaghetti']),
    new Client(9, 'Ludvig', 'Bodmer', 'berlinpoems2@imail.uk', '231-323-3098', ['rum', 'magazine', 'suit']),
    new Client(10, 'Henry', 'Tomasino', 'mafiagangst2@imail.uk', '231-323-3007', ['cigarettes']),];
console.log(clients);


//-2.2 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('2.2 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)');
let sortClients = clients.sort((order1, order2) => order1.order.length - order2.order.length);
console.log(sortClients);
console.log('________________________________________________')


//-3.1 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('3.1 Створити функцію конструктор яка дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:');
function Car (model, made, year, maxSpeed, engineCapacity,) {
                this.model = model;
                this.made = made;
                this.year = year;
                this.maxSpeed = maxSpeed;
                this.engineCapacity = engineCapacity;
                this.greeting = function (speed){
                        return `${speed} ${this.maxSpeed} km/h on the ${this.made} ${this.model}`
                        }
                this.info = function (){
                        console.log(`Model: ${this.model}, Made: ${this.made}, Year: ${this.year}, Max Speed: ${this.maxSpeed}, Engine Capacity: ${this.engineCapacity}`);
                }
                this.increaseMaxSpeed = function newSpeed (newMaxSpeed) {
                    if (newMaxSpeed > this.maxSpeed)
                    console.log(`New max speed: ${newMaxSpeed} of car ${this.made} ${this.model}`);
                    else{
                        console.log(`speed remain ${maxSpeed} of car ${this.made} ${this.model}`)
                    }
                }
                this.changeYear = function setNewYear(newYear){
                    console.log(`new year is ${newYear} of ${this.made} ${this.model}`);
                }
                this.addDriver = function newDriver (name, age, nation){
                    console.log(`new driver ${name}, ${age} years, from ${nation} start driving on a car ${this.made} ${this.model} ${this.year}`)
                }
        }

let cars = []
console.log(cars);

let car1 = new Car('Golf IV', 'Volkswagen', 1998, 188, 1.8 );
let car2 = new Car('S2000', 'Honda', 2009, 237, 2 );
let car3 = new Car('RX-7', 'Mazda', 2005, 250, 1.3 );
let newMaxSpeed = (23);


//--3.2 drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log('3.2 drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`')
console.log(car1.greeting('we drive with speed'));
console.log(car2.greeting('we drive with speed'));
console.log(car3.greeting('we drive with speed'));

//--3.3 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log('3.3 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`')
car1.info();
car2.info();
car3.info();


//-3.4- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car1.increaseMaxSpeed(247)
car2.increaseMaxSpeed(247)
car3.increaseMaxSpeed(247)


//--3.5 changeYear (newValue) - змінює рік випуску на значення newValue
car1.changeYear(2004)


//--3.6 addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car1.addDriver('Ken Block', 56, 'American');
car2.addDriver('Dave Mirra', 42, 'American');
car3.addDriver('Jade Taylor', 38, 'American');
console.log('________________________________________________')

/*-4.1 (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:*/
console.log('4.1 (Те саме, тільки через клас)\n' +
    'Створити клас який дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:*/\n')
class Car1 {
    constructor(model, made, year, maxSpeed, engineCapacity,) {

        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

        cars1.push(this);
        this.greeting = function (speed) {
            return `${speed} ${this.maxSpeed} km/h on the ${this.made} ${this.model}`
        }
        this.info = function () {
            console.log(`Model: ${this.model}, Made: ${this.made}, Year: ${this.year}, Max Speed: ${this.maxSpeed}, Engine Capacity: ${this.engineCapacity}`);
        }
        this.increaseMaxSpeed = function newSpeed(newMaxSpeed) {
            if (newMaxSpeed > this.maxSpeed)
                console.log(`New max speed: ${newMaxSpeed} of car ${this.made} ${this.model}`);
            else {
                console.log(`speed remain ${maxSpeed}`)
            }
        }
        this.changeYear = function setNewYear(newYear) {
            console.log(`new year is ${newYear} of ${this.made} ${this.model}`);
        }
        this.addDriver = function newDriver(name, age, nation) {
            console.log(`new driver ${name}, ${age} years, from ${nation} start driving on a car ${this.made} ${this.model} ${this.year}`)
        }
    }
}

let cars1 = []
console.log(cars1)
let car4 = new Car1 ('Agera', 'Koenigsegg', 2010, 433, 5 );
let car5 = new Car1 ('Supra', 'Toyota', 2002, 266, 3 );
//--4.2 drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log('4.2 drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`')
console.log(car4.greeting('we drive with speed'));
console.log(car5.greeting('we drive with speed'));

//--4.3 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log('4.3 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`')
car4.info();
car5.info();


//--4.4 increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
console.log('4.4 increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed')
car4.increaseMaxSpeed(320);
car5.increaseMaxSpeed(320);

//--4.5 changeYear (newValue) - змінює рік випуску на значення newValue
console.log('4.5 changeYear (newValue) - змінює рік випуску на значення newValue')
car4.changeYear(2011);
car5.changeYear(1998);

//--4.6 addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
console.log('4.6 addDriver (driver) - приймає об\'єкт який "водій" з довільним набором полів, і додає його в поточний об\'єкт car')
car4.addDriver('Trevis Pastrana', 32, 'American');
car5.addDriver('Mohammed Ben Sulayem', 62, 'FIA');
console.log('________________________________________________')


/*5-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
console.log('5-створити класс/функцію конструктор попелюшка з полями ім\'я, вік, розмір ноги. Створити масив з 10 попелюшок.\n' +
    'Сторити об\'єкт класу "принц" за допомоги класу який має поля ім\'я, вік, туфелька яку він знайшов.\n' +
    '    За допомоги циклу знайти яка попелюшка повинна бути з принцом.')
class Cinderella {
    constructor(name, age, footSize) {

        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [new Cinderella('Leyla', 32, 42),
    new Cinderella('Anet', 21, 41),
    new Cinderella('Jerry', 27, 42),
    new Cinderella('Abigale', 24, 40),
    new Cinderella('Molly', 37, 39),
    new Cinderella('Karen', 33, 39),
    new Cinderella('Fodoris', 21, 35),
    new Cinderella('Elizabet', 25, 36),
    new Cinderella('Nancy', 29, 38),
    new Cinderella('Ashley', 21, 37)]
class Prince {
    constructor(name, age, findingShoe) {

        this.name = name;
        this.age = age;
        this.findingShoe = findingShoe;
    }
}

let prince = new Prince('Mirliflor', 24,350)
for (const cindirellasElement of cinderellas) {
    if ( cindirellasElement.footSize === prince.findingShoe){
        console.log(cindirellasElement);
    }
}
console.log('________________________________________________')
console.log('Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/')
Cinderella.prototype.find = function (callback){
    for (const footSize in cinderellas) {
        if (footSize === callback){
            console.log(footSize);
        }
        else{
            console.log('error');
        }
    }
}
const findCindirella = cinderellas.find (cinderella => cinderellas.footSize === prince.findingShoe);
    if (findCindirella){
        console.log('Cindirella is', cinderellas.name)
    }
    else{
        console.log('cinderella is not found')
    }


console.log('________________________________________________')




//6Через Array.prototype. створити власний foreach, , map
console.log('Через Array.prototype. створити власний foreach:');
Car.prototype.carForEach = function (callback){
    for (const item in this) {
        if (typeof this[item] === 'function') continue;
        callback(item)
    }
}
car1.carForEach(item => console.log(item));



console.log('Через Array.prototype. створити власний filter:');
Car.prototype.filter = function (callback){
    if (this.model === 'RX-7') {
        callback(this.made + ' ' + this.model);
    }
    else {
        callback('error');
    }

}
car2.filter(el => console.log(el));
car3.filter(el => console.log(el));



console.log('Через Array.prototype. створити власний map:');
Car.prototype.map = function (callback){
        callback(this)
}
car2.map(el => console.log(el));




