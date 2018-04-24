const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
`toUpperCase()` method on strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const properPlanets = planets.map((item) => {
  return item.slice(0, 1).toUpperCase() + item.slice(1)
})

const planetEl = document.getElementById("planets")
properPlanets.forEach((item, index) => {
  const newNode = document.createElement("p")
  const planetNumber = index + 1
  newNode.textContent = `${item}, planet number ${planetNumber}`
  planetEl.appendChild(newNode)
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const filteredPlanets = planets.filter((item) => {
  return item.includes("e")
})

console.log(filteredPlanets)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

console.log(words.reduce((a, b) => `${a} ${b}`))