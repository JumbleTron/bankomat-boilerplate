import chalk from "chalk";

export const yellow = (msg) => console.log(chalk.yellow(msg));

export const text = (msg) => console.log(chalk.cyan(msg));
export const error = (msg) => console.log(chalk.red(msg));
export const warning = (msg) => console.log(chalk.bgHex('#ffa500')(msg));
export const info = (msg) => console.log(chalk.blue(msg));
export const success = (msg) => console.log(chalk.green(msg));
