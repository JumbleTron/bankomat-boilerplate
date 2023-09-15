import readline from "readline";
import { error, info, text } from "./logger.js";

const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = () => {
    text('\n1. Sprawdź saldo');
    text('2. Wypłać środki');
    text('3. Zdeponuj środki');
    text('4. Zmień PIN');
    text('5. Zakończ\n');
    cmd.question("Wybierz opcję: ", (option) => {
        if (option === '5') {
            info('Do zobaczenia')
            cmd.close();
            process.exit(0)
        } else {
            error('Nieprawidłowy wybór')
            menu();
        }
    })
}

const login = () => {
    cmd.question("Podaj PIN: ", (pin) => {
        if (pin !== '1111') {
            error('Nieprawidłowy PIN!')
            login();
        } else {
            info('Witaj w bankomacie!')
            menu();
        }
    })
}

login();
