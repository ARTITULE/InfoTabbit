import { getPokemon } from "./api.js";

export async function initializePokemon() {

    const pokemonNameElement = document.querySelector("#random-pokemon-name");
    const pokemonImageElement = document.querySelector("#random-pokemon-image");
    const newPokemonButton = document.querySelector("#random-pokemon-button")

    const number = Math.floor(Math.random() * 1025) + 1;
    const pokemonData = await getPokemon(number);

    if (!pokemonData) {
        console.log("Could not load Pokémon.");
        return;
    }

    const formattedName = pokemonData.name.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    pokemonNameElement.textContent = formattedName;
    pokemonImageElement.src = pokemonData.sprites.front_default;


    newPokemonButton.addEventListener("click", async () => {
        newPokemonButton.disabled = true;

        try {

            const number = Math.floor(Math.random() * 1025) + 1;
            const pokemonData = await getPokemon(number);

            if (!pokemonData) {
                console.log("Could not load Pokémon.");
                return;
            }

            const formattedName = pokemonData.name.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            pokemonNameElement.textContent = formattedName;
            pokemonImageElement.src = pokemonData.sprites.front_default;
            

        } finally {
            newPokemonButton.disabled = false;
        }

    });
    
}