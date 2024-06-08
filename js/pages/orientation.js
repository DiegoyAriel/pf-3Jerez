// Variables
let drinkF = "";
let drinkC = "";
let drinkM = "";
let drinkA = "";
let ingredientsF = "";
let ingredientsC = "";
let ingredientsM = "";
let ingredientsA = "";

// Fetch Functions
const fetchDrink = (id) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => {
      const drink = data.drinks[0];
      return {
        name: drink.strDrink,
        ingredients: [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, + "and" + drink.strIngredient6]
          .filter(ingredient => ingredient)
          .join(', ') + '.'
      };
    });
};

// Fetch Data
Promise.all([
  fetchDrink(11007).then(newDrink => { drinkM = newDrink.name; ingredientsM = newDrink.ingredients; }),
  fetchDrink(11003).then(newDrink => { drinkC = newDrink.name; ingredientsC = newDrink.ingredients; }),
  fetchDrink(11002).then(newDrink => { drinkF = newDrink.name; ingredientsF = newDrink.ingredients; }),
  fetchDrink(11000).then(newDrink => { drinkA = newDrink.name; ingredientsA = newDrink.ingredients; })
]).then(() => {
  // Object constructor
  class Cat {
    constructor(name, color, job, message, drink, ingredients) {
      this.name = name;
      this.color = color;
      this.job = job;
      this.message = message;
      this.drink = drink;
      this.ingredients = ingredients;
    }
  }

  // Objects
  const madameLaPurr = new Cat("MadameLaPurr", "Grey", "Predict the future", "Ask me about your future or give an atun can.", drinkF, ingredientsF);
  const cathspiare = new Cat("Cathspiare", "Brown", "Write stories", "I gonna scare you to the bone.", drinkC, ingredientsC);
  const miauLaCasan = new Cat("Miau La Casan", "Blonde", "Give advices", "You are great and magnificent.", drinkM, ingredientsM);
  const ariel = new Cat("Ariel", "Grey", "Talk about his employees", "I´m the owner of this website. Please enjoy your experience.", drinkA, ingredientsA);

  // Activate
  const magicB = document.getElementById("magic");
  const cathspiareB = document.getElementById("cathspiare");
  const miauB = document.getElementById("miau");
  const arielB = document.getElementById("ariel");

  const talk = (elementId, text) => {
    document.getElementById(elementId).innerText = text;
  };

  magicB.onclick = () => {
    talk("catName", madameLaPurr.name);
    talk("color", madameLaPurr.color);
    talk("job", madameLaPurr.job);
    talk("message", madameLaPurr.message);
    talk("drink", madameLaPurr.drink);
    talk("ingredients", madameLaPurr.ingredients);
  };
  cathspiareB.onclick = () => {
    talk("catName", cathspiare.name);
    talk("color", cathspiare.color);
    talk("job", cathspiare.job);
    talk("message", cathspiare.message);
    talk("drink", cathspiare.drink);
    talk("ingredients", cathspiare.ingredients);
  };
  miauB.onclick = () => {
    talk("catName", miauLaCasan.name);
    talk("color", miauLaCasan.color);
    talk("job", miauLaCasan.job);
    talk("message", miauLaCasan.message);
    talk("drink", miauLaCasan.drink);
    talk("ingredients", miauLaCasan.ingredients);
  };
  arielB.onclick = () => {
    talk("catName", ariel.name);
    talk("color", ariel.color);
    talk("job", ariel.job);
    talk("message", ariel.message);
    talk("drink", ariel.drink);
    talk("ingredients", ariel.ingredients);
  };
});