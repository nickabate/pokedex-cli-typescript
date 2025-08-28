# Pokedex CLI (TypeScript)
![CI status](https://github.com/nickabate/pokedex-cli-typescript/actions/workflows/ci.yml/badge.svg)

A command-line Pokedex application written in TypeScript. This tool allows you to explore Pokémon locations, catch Pokémon, and inspect your collection directly from your terminal.

## Features

- Browse Pokémon locations using paginated map commands.
- Explore specific locations to see which Pokémon can be found there.
- Attempt to catch Pokémon and build your own Pokedex.
- Inspect details about caught Pokémon, including stats and types.
- View all Pokémon you have caught so far.
- Caching for efficient API usage.

## Why Did I Build This

This project was created to demonstrate hands-on experience with TypeScript, Node.js, and CLI application development. It also showcases API integration, caching strategies, and interactive terminal interfaces.

## Tech Stack

- [Node.js](https://nodejs.org/) for the runtime environment.
- [TypeScript](https://www.typescriptlang.org/) for type safety and better tooling.
- [readline](https://nodejs.org/api/readline.html) for interactive CLI input.
- [Vitest](https://vitest.dev/) for unit testing.
- [PokeAPI](https://pokeapi.co/) as the data source for Pokémon and locations.

## Usage

1. **Install dependencies:**
   ```sh
   npm ci
   ```

2. **Build the project:**
   ```sh
   npm run build
   ```

3. **Start the CLI:**
   ```sh
   npm start
   ```

4. **Available Commands:**
   - `help` — Show all commands.
   - `map` — Show next page of locations.
   - `mapb` — Show previous page of locations.
   - `explore <location_name>` — List Pokémon in a location.
   - `catch <pokemon_name>` — Attempt to catch a Pokémon.
   - `inspect <pokemon_name>` — Show details about a caught Pokémon.
   - `pokedex` — List all caught Pokémon.
   - `exit` — Exit the CLI.

## Lessons Learned

Building a CLI app with TypeScript and Node.js provided valuable experience with asynchronous programming, API integration, and interactive user interfaces. Implementing caching and robust error handling were key learning points.

## Author

Thanks for checking out this project! Feel free to reach out with questions or suggestions.

- Portfolio: [nickabate.dev](https://nickabate.dev/)
- LinkedIn: [Nick Abate](https://www.linkedin.com/in/nick-abate/)