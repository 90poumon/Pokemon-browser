// Select DOM elements
const pokemonImage = document.querySelector("#pokemon-image");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonTypes = document.querySelector("#pokemon-types");

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

// Current pokemon ID
const currentId = 1;

// Async function to fetch pokemon
async function getPokemon(id) {

 

    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    ); 
