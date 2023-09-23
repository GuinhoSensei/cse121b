/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Thiago Gouveia";
let currentYear = new Date().getFullYear();
const profilePicture = "images/Yo.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.querySelector("#food");
const yearElement = document.querySelector("#year");
//const imageElement = document.querySelector('img'); could't get this to work for some reason
document.querySelector("img").setAttribute("src", profilePicture);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent(currentYear);
//imageElement.setAttribute("src", profilePicture);
//imageElement.setAttribute("alt", `Profile image of${fullName}.`); same as line 14

/* Step 5 - Array */

const favoriteFood = ["Pizza", "Feijoada", "Banana", "Ramen"];
foodElement.textContent = favoriteFood;
let extra = "Beans";
favoriteFood.push(extra);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;






