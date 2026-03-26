import chalk from "chalk";

export class CreateFileError extends Error {
    constructor(msg: string) {
        super(chalk.red(msg));
    }
}
