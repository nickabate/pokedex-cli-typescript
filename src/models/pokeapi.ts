import { Cache } from '../config/pokecache.js';
import { ShallowLocations, Location, Pokemon } from './types.js';

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;

    constructor(cacheInterval: number) {
        this.cache = new Cache(cacheInterval);
    }

    closeCache() {
        this.cache.stopReapLoop();
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;

        const cached = this.cache.get<ShallowLocations>(url);
        if (cached) {
            return cached;
        }

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const locations: ShallowLocations = await resp.json();
            this.cache.add(url, locations);
            return locations;
        } catch (e) {
            throw new Error(`Error fetching locations: ${(e as Error).message}`);
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

        const cached = this.cache.get<Location>(url);
        if (cached) {
            return cached;
        }

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const location: Location = await resp.json();
            this.cache.add(url, location);
            return location;
        } catch (e) {
            throw new Error(
                `Error fetching location '${locationName}': ${(e as Error).message}`,
            );
        }
    }

    async fetchPokemon(pokemonName: string): Promise<Pokemon> {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;

        const cached = this.cache.get<Pokemon>(url);
        if (cached) {
            return cached;
        }

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const pokemon: Pokemon = await resp.json();
            this.cache.add(url, pokemon);
            return pokemon;
        } catch (e) {
            throw new Error(
                `Error fetching pokemon '${pokemonName}': ${(e as Error).message}`,
            );
        }
    }
}

