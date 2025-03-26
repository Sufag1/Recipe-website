const fetchMeals = async () => {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
        const data = await res.json();
        displayMeals(data.meals)

    } catch(error) {
        console.error('Error while fetching data:', error);
    }
}




const fetchIngredients = (anyMeal) => {
    let ingredients = [];
    for (let i = 1; i <= 5; i++) {
        if (anyMeal[`strIngredient${i}`]) {
            ingredients.push(`${anyMeal[`strIngredient${i}`]} - ${anyMeal[`strMeasure${i}`]}`);
        }
    }
    return ingredients;
}