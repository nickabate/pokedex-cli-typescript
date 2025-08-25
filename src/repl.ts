import { State } from './state';

export const cleanInput = (input: string): string[] => {
    return input.trim().toLowerCase().split(/\s+/);
};

export const startREPL = (state: State) => {
    state.readline.prompt();

    state.readline.on('line', (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }

        const commandName = words[0];

        const cmd = state.commands[commandName];

        if (!cmd) {
            console.log(
                `Unknown command: "${commandName}". Type "help" for a list of commands.`,
            );
            state.readline.prompt();
            return;
        }

        try {
            cmd.callback(state);
        } catch (e) {
            console.log(e);
        }
        state.readline.prompt();
    });

}

