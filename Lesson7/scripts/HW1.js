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
        users.push(this);
}
let users = [];
console.log(users);

let user1 = new User(1, 'Arthyr', 'Morgan', 'mirg23@imail.uk', '231-323-3242');
let user2 = new User(3, 'Nico', 'Bellic', 'bellicnic@imail.uk', '231-323-3048');
let user3 = new User(2, 'Martin', 'Eden', 'writertop3@imail.uk', '231-323-3114');
let user4 = new User(4, 'Godfried', 'Lens', 'lencegersold48@imail.uk', '231-323-3881');
let user5 = new User(7, 'Joseph', 'Gilgun', 'brassic24@imail.uk', '231-323-3007');
let user6 = new User(6, 'Clariss', 'Sratlink', 'detectivepriv@imail.uk', '231-323-3114');
let user7 = new User(5, 'Lilend', 'Gont', 'goofthings223@imail.uk', '231-323-3334');
let user8 = new User(8, 'Wolf', 'Larsen', 'seawolf1911@imail.uk', '231-323-3181');
let user9 = new User(9, 'Ludvig', 'Bodmer', 'berlinpoems2@imail.uk', '231-323-3098');
let user10 = new User(10, 'Henry', 'Tomasino', 'mafiagangst2@imail.uk', '231-323-3007');



console.log('1.2 Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об\'єкти з парними id (filter)');
users.filter(user => {if (user.id % 2 == 0){console.log(user);}
});



console.log('1.3 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)');
let sortUsers = users.sort((id1, id2) => id1.id - id2.id);
console.log(sortUsers);



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
                clients.push(this);

        }

}
let clients = [];
console.log(clients);

let client1 = new Client(1, 'Arthyr', 'Morgan', 'mirg23@imail.uk', '231-323-3242',['burbon', 'krekers', 'cigarettes'] );
let client2 = new Client(3, 'Nico', 'Bellic', 'bellicnic@imail.uk', '231-323-3048', ['juice', 'glasses']);
let client3 = new Client(2, 'Martin', 'Eden', 'writertop3@imail.uk', '231-323-3114', ['tomato', 'pen', 'notes', 'newspaper', 'bread']);
let client4 = new Client(4, 'Godfried', 'Lens', 'lencegersold48@imail.uk', '231-323-3881', ['rum', 'beef meat', 'bread']);
let client5 = new Client(7, 'Joseph', 'Gilgun', 'brassic24@imail.uk', '231-323-3007', ['beer', 'car toy', 'cigarettes']);
let client6 = new Client(6, 'Clariss', 'Sratlink', 'detectivepriv@imail.uk', '231-323-3114', ['schampoo', 'beer']);
let client7 = new Client(5, 'Lilend', 'Gont', 'goofthings223@imail.uk', '231-323-3334', ['magazine']);
let client8 = new Client(8, 'Wolf', 'Larsen', 'seawolf1911@imail.uk', '231-323-3181', ['whiskey', 'spaghetti']);
let client9 = new Client(9, 'Ludvig', 'Bodmer', 'berlinpoems2@imail.uk', '231-323-3098', ['rum', 'magazine', 'suit']);
let client10 = new Client(10, 'Henry', 'Tomasino', 'mafiagangst2@imail.uk', '231-323-3007', ['cigarettes']);



//-2.2 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('2.2 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)');
let sortClients = clients.sort((order1, order2) => order1.order.length - order2.order.length);
console.log(sortClients);



//-3.1 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
console.log('3.1 Створити функцію конструктор яка дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:');
function Car (model, made, year, maxSpeed, engineCapacity,) {
                this.model = model;
                this.made = made;
                this.year = year;
                this.maxSpeed = maxSpeed;
                this.engineCapacity = engineCapacity;
                cars.push(this);
                this.greeting = function (speed){
                        return `${speed} ${this.maxSpeed} km/h`
                        }
                this.info = function (){
                        console.log(`Model: ${this.model}, Made: ${this.made}, Year: ${this.year}, Max Speed: ${this.maxSpeed}, Engine Capacity: ${this.engineCapacity}`);
                }
                this.increaseMaxSpeed = function newSpeed (newMaxSpeed) {
                    if (newMaxSpeed > this.maxSpeed)
                    console.log(`New max speed: ${newMaxSpeed} of car ${this.made} ${this.model}`);
                    else{
                        console.log(`speed remain ${maxSpeed}`)
                    }
                }
                this.changeYear = function setNewYear(newYear){
                    console.log(`new year is ${newYear}`);
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

//--3.3 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log('3.3 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`')
car2.info();


//-3.4- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
car3.increaseMaxSpeed(277)


//--3.5 changeYear (newValue) - змінює рік випуску на значення newValue
car1.changeYear(2004)


//--3.6 addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
car2.addDriver('Ken Block', 28, 'England');


/*-4.1 (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
--4.2 drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
--4.3 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
--4.4 increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
--4.5 changeYear (newValue) - змінює рік випуску на значення newValue
--4.6 addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/



/*5-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/



//6Через Array.prototype. створити власний foreach, filter, map