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
  try {
    // Fetch pokemon data from the API
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    // guard clause to check if the response is ok
    if (!resp.ok) {
      console.error("Pokemon not found");
      return;
    }

    // Parse the JSON response
    const data = await resp.json();

    // log response data to the console
    console.log(data);

    renderPokemon(data);
  } catch (error) {
    console.error("Error fetching pokemon:", error);
  }
}

// Function to render pokemon data to the DOM
function renderPokemon(data) {
  //render pokemon image
  pokemonImage.src = data.sprites.front_default;

  //render pokemon name
  pokemonName.textContent = data.name;
}
