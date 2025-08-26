import { startREPL } from "./repl.js";
import { initState } from "./state.js";

const main = async () => {
    const state = initState(1000 * 60 * 5); // 5 minutes
    await startREPL(state);
};

main();