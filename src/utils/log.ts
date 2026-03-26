import chalk from "chalk";

export class Log {
    public static sucess(msg: string) {
        console.log(chalk.green(msg));
    }

    public static error(msg: string) {
        console.log(chalk.red(msg));
    }

    public static warning(msg: string) {
        console.log(chalk.yellow(msg));
    }
}
