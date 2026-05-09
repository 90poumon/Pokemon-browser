// Select DOM elements
const pokemonImage = document.querySelector("#pokemon-image");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonTypes = document.querySelector("#pokemon-types");

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
// Current pokemon ID
let currentId = 1;

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

  //render pokemon types using map to build a list
  const types = data.types.map((type) => {
    return `<li class="bg-slate-700 px-3 py-1 rounded capitalize">
        ${type.type.name}
      </li>`;
  });

  // add the types to the DOM
  pokemonTypes.innerHTML = types.join("");
}

// add prev button
prevBtn.addEventListener("click", () => {
  //boundary check to prevent going below 1

  if (currentId <= 1) {
    return;
  }
  currentId--;
  getPokemon(currentId);
});

// add next button
nextBtn.addEventListener("click", () => {
  // boundary check to prevent going above 1025
  if (currentId >= 1025) {
    return;
  }
  currentId++;
  getPokemon(currentId);
});

//load the first pokemon on page load
getPokemon(currentId);
