import type { State } from "../state/state.js";

export const commandPokedex = async (state: State) => {
    console.log("Your Pokedex:");

    if (!Object.keys(state.caughtPokemon).length) {
        throw new Error('No pokemon');
    }

    for (const pokemon of Object.values(state.caughtPokemon)) {
        console.log(`- ${pokemon.name}`);
    }
};