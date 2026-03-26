import chalk from "chalk";

export class CreateFolderError extends Error {
    constructor(msg: string) {
        super(chalk.red(msg));
    }
}
