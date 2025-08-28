import type { State } from '../state/state.js';

export const commandExit = async (state: State) => {
  console.log("Closing the Pokedex... Goodbye!");
  state.readline.close();
  state.pokeAPI.closeCache();
  process.exit(0);
};