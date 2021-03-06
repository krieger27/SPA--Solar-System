
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

    var el = document.getElementById("planets");
   
   allPlanets = planets.forEach (function(planet){
       el.innerHTML +=`${planet} `;
   })

   let planetsUpper = planets.map((planet) =>
    planet.charAt(0).toUpperCase()+ planet.slice(1)
    );
    el.innerHTML +=`<p>${planetsUpper}</p>`;

    let arrayWE = planets.filter((planet) =>
        planet.includes("e"));
    el.innerHTML += arrayWE;


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let reduced = words.reduce ((word, reduced) => (word + ' ' +reduced));
reduced +=`.`;

let newSentence = document.getElementById("words")
newSentence.innerHTML = reduced;