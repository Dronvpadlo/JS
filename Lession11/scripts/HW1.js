//1.Взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let cartsBlock = document.getElementById('cartsBlock');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) =>{
        console.log(carts)
        for (const cart of carts) {
            for (const item of cart.products) {
                let cartInfo = document.createElement('div');
                let id = document.createElement('div');
                let title = document.createElement('div');
                let price = document.createElement('div');
                let quantity = document.createElement('div');
                let total = document.createElement('div');
                cartInfo.classList.add('cartInfo')
                id.classList.add('cart');
                id.innerText = `id: ${item.id}`
                title.classList.add('cart');
                title.innerText = `title:  ${item.title}`
                price.classList.add('cart');
                price.innerText = `price: ${item.price}`
                quantity.classList.add('cart');
                quantity.innerText = `quantity: ${item.quantity}`
                total.classList.add('cart');
                total.innerText = `total: ${item.total}`
                cartInfo.append(id, title, price, quantity, total);
                cartsBlock.appendChild(cartInfo);
            }
        }
    });








//2.Взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
let recipesBlock = document.getElementById('recipesBlock');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes}) => {
        for (const recipe of recipes) {
            let recipeInfo =document.createElement('div');
            let recipeBlock = document.createElement('div');
            let recipeName = document.createElement('div');
            let instructions = document.createElement('div');
            let ingredientsList = document.createElement('ul');
            let recipeImg = document.createElement('img');
            recipeBlock.classList.add('recipe');
            recipeName.innerText = `name: ${recipe.name}`
            recipeName.classList.add('recipeName');
            recipeInfo.classList.add('recipeInfo')
            recipeBlock.innerText = `id: ${recipe.id},
                calories per serving: ${recipe.caloriesPerServing},
                cook time minutes: ${recipe.cookTimeMinutes},
                cuisine: ${recipe.cuisine},
                difficulty: ${recipe.difficulty},
                prepare time minutes ${recipe.prepTimeMinutes}
                rating: ${recipe.rating}
                servings: ${recipe.servings}`

            recipeImg.src = `${recipe.image}`
            for (const item of recipe.instructions){
                let instruction = document.createElement('p');
                instruction.innerText =`${item}`
                instructions.appendChild(instruction);
            }
            for (const item of recipe.ingredients) {
                let ingredient = document.createElement('li');
                ingredient.innerText = `${item}`
                ingredientsList.appendChild(ingredient);
            }
            recipeInfo.append(recipeName, recipeBlock, recipeImg, ingredientsList, instructions);
            recipesBlock.appendChild(recipeInfo);
        }
    });






/*3. зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
    вивести їх id + name списком та додати посилання з href = user-detail.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)*/
let usersBlock = document.getElementById('usersBlock');
let baseUrs = 'http://jsonplaceholder.typicode.com/'
let getUsersUrl = baseUrs + '/users'
let getUserById = (id)=> getUsersUrl + '/' + id
fetch(getUsersUrl)
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            let userList = document.createElement('ul');
            let userId = document.createElement('li');
            let userName = document.createElement('li');
            let userHref = document.createElement('a');
            userList.classList.add('userInfo')
            userHref.href = 'user-detail.html?id=' + user.id;
            userHref.innerText = getUsersUrl + `${user.id}`
            userId.innerText = `Id: ${user.id}`
            userName.innerText = `Name: ${user.name}`
            userList.append(userId, userName, userHref);
            usersBlock.appendChild(userList);
        }
    })
let userDetailsContainer = document.getElementById('userDetails');
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        console.log(user)
        let userInfo = document.createElement('div');
        let userDetails = document.createElement('div');
        let userAddress =  document.createElement('div');
        let userCompany = document.createElement('div');
        let userPosts = document.createElement('div')
        userInfo.classList.add('userInfo')
        userDetails.classList.add('userDetails')
        userAddress.classList.add('userDetails')
        userCompany.classList.add('userDetails')
        userDetails.innerText = `ID: ${user.id}
        Name: ${user.name}
        Phone: ${user.phone}
        Username: ${user.username}
        Website: ${user.website}`
        userAddress.innerText = `Address: City: ${user.address.city} Geo: ${user.address.geo.lat}, ${user.address.geo.lng} Street: ${user.address.street} Suite: ${user.address.suite} Zipcode: ${user.address.zipcode}`
        userCompany.innerText =`Company: bs: ${user.company.bs} catchPhrase: ${user.company.catchPhrase} name: ${user.company.name}`
        let postButtonClicked = false;
        userInfo.append(userDetails, userAddress, userCompany);
        userDetailsContainer.append(userInfo, userPosts)
    });

