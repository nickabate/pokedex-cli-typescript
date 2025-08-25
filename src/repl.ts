import { createInterface } from 'node:readline';
import { getCommands } from './commands.js';

export const cleanInput = (input: string): string[] => {
    return input.trim().toLowerCase().split(/\s+/);
};

export const startREPL = () => {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
    });

    rl.prompt();

    rl.on('line', (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const commandName = words[0];

        const commands = getCommands();
        const cmd = commands[commandName];

        if (!cmd) {
            console.log(
                `Unknown command: "${commandName}". Type "help" for a list of commands.`,
            );
            rl.prompt();
            return;
        }

        try {
            cmd.callback(commands);
        } catch (e) {
            console.log(e);
        }
        rl.prompt();
    });

}

