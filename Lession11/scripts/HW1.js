//1.Взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let cartsBlock = document.getElementById('cartsBlock')
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) =>{
        for (const cart of carts) {
            for (const item of cart.products) {
                let cartInfo = document.createElement('div')
                let id = document.createElement('div')
                let title = document.createElement('div')
                let price = document.createElement('div')
                let quantity = document.createElement('div')
                let total = document.createElement('div')
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
                cartsBlock.appendChild(cartInfo)
            }
        }
    });




//2.Взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
let recipesBlock = document.getElementById('recipesBlock')
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes}) => {
        for (const recipe of recipes) {
            console.log(recipe)
            let recipeBlock = document.createElement('div');
            let instructions = document.createElement('div');
            let ingredientsList = document.createElement('ul');
            let recipeImg = document.createElement('img')
            recipeBlock.classList.add('recipe');

            recipeBlock.innerText = `name: ${recipe.name},
                id: ${recipe.id},
                calories per serving: ${recipe.caloriesPerServing},
                cook time minutes: ${recipe.cookTimeMinutes},
                cuisine: ${recipe.cuisine},
                difficulty: ${recipe.difficulty},
                prepare time minutes ${recipe.prepTimeMinutes}
                rating: ${recipe.rating}
                servings: ${recipe.servings}`


            recipeImg.src = `${recipe.image}`
            for (const item of recipe.instructions){
                let instruction = document.createElement('p')
                instruction.innerText =`${item}`
                instructions.appendChild(instruction)
            }
            for (const item of recipe.ingredients) {
                let ingredient = document.createElement('li');
                ingredient.innerText = `${item}`
                ingredientsList.append(ingredient)

            }
            recipesBlock.append(recipeBlock, recipeImg, ingredientsList, instructions)
        }
    });

/*3. зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
    вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)*/