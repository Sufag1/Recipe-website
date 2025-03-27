/*Fetching data from API*/


const fetchMeals = async () => {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
        const data = await res.json();
        displayMeals(data.meals)

    } catch(error) {
        console.error('Error while fetching data:', error);
    }
}



/*Fetching Individual meal from Meals array*/

const fetchIngredients = (anyMeal) => {
    let ingredients = [];
    for (let i = 1; i <= 5; i++) {
        if (anyMeal[`strIngredient${i}`]) {
            ingredients.push(`${anyMeal[`strIngredient${i}`]} - ${anyMeal[`strMeasure${i}`]}`);
        }
    }
    return ingredients;
}



/*Defining DisplayMeals Function*/


const displayMeals = (parameter) => {
    const unOrderdList = document.getElementById('meal-templates');
    unOrderdList.innerHTML = '';


    parameter.forEach(meal => {
        const ingredients = fetchIngredients(meal);
        const mealTemplate = document.createElement('div');
        mealTemplate.classList.add('meal-template');


        
        mealTemplate.innerHTML = `
        <div class="meal-template">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h2 class="meal-name">${meal.strMeal}</h2>
                <p class="meal-recipe">${meal.strInstructions.substring(0, 150)}...</p>
                <ul class="ingredients">
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <a href="${meal.strYoutube}" target="_blank" class="video-link">Watch Video</a>
            </div>
        `;


        unOrderdList.appendChild(mealTemplate);
    });
}



fetchMeals();