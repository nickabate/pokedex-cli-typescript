import { startREPL } from "./repl.js";
import { initState } from "./state.js";

const main = () => {
    const state = initState();
    startREPL(state);
};

main();