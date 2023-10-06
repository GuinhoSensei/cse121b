/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Thago Gouveia",
    photo: "images/Yo.jpg",
    favoriteFood: [
        "Pizza",
        "Burgers",
        "Salad",
        "Grilled Meat",
        "Bananas"
    ],
    hobbies: [
        "Drawing",
        "Skateboarding",
        "Playing Instruments",
        "Reading",
        "Watching Anime"
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Sao Paulo, Brazil",
        length: "16 years"
    },
    {
        place: "Orlando, FL",
        length: "2 years"
    },
    {
        place: "Salt Lake City, UT",
        length: "2 years"
    },
    {
        place: "Richmond, CA",
        length: "3 years"
    },
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    
    
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
});
