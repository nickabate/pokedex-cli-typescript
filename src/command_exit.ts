import type { State } from './state';

export const commandExit = (state: State) => {
  console.log("Closing the Pokedex... Goodbye!");
  state.readline.close();
  process.exit(0);
};