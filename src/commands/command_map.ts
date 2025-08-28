import type { State } from "../state/state.js";

export const commandMapForward = async (state: State) => {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (const loc of locations.results) {
        console.log(loc.name);
    }
};

export const commandMapBack = async (state: State) => {
    if (!state.prevLocationsURL) {
        throw new Error("you're on the first page");
    }

    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (const loc of locations.results) {
        console.log(loc.name);
    }
};