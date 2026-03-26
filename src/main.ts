import path from "node:path";
import { Files } from "./utils/files";
import { Log } from "./utils/log";

async function main() {
    // Definição das variáveis uteis
    const folderName: string = 'storage';
    const folderPath: string = path.join();
    const fileName: string = 'aula05';
    const fileDir: string = path.join(folderPath, folderName);
    const fileContent: string = 'Aula 05 - Manipulação de arquivos com Node.js.\n\nArquivo criado com sucesso durante a atividade final.';
    const filePath: string = path.join(fileDir, fileName + '.txt');

    // Criar automaticamente a pasta storage caso ela não exista
    await Files.createFolder({
        folderName: folderName,
        folderPath: folderPath,
    });

    // Criando o arquivo já com o texto solicitado
    await Files.createTxtFile({
        filePath: fileDir,
        fileName: fileName,
        fileContent: fileContent,
    });

    // Buscando o texto que está dentro do arquivo criado
    const content: string = await Files.readTxtFile({
        filePath: filePath,
    });

    Log.sucess(`\n--- Dados lidos do arquivo [ ${ fileName }.txt ] ---\n`);
    Log.warning(content);
    Log.sucess('\n --- Fim do programa ---');
}

main();
