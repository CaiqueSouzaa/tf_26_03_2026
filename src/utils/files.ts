import fs from 'fs';
import path from 'path';
import { CreateFolderError } from '../errors/create_folder_error';
import { Log } from './log';
import { CreateFileError } from '../errors/create_file_error';

export class Files {
    public static createFolder({ folderName, folderPath = '' }: { folderPath: string, folderName: string }) {
        if (folderName.length === 0) {
            throw new CreateFolderError("Obrigatório informar o diretório onde a pasta deve ser criada");
        }
        return new Promise<void>((resolve, reject) => {
            fs.mkdir(path.join(folderPath, folderName), (err) => {
                if (err) {
                    if (err.code === 'EEXIST') {
                        Log.warning(`A pasta [ ${folderName} ] já existe`);
                        return;
                    }
    
                    reject();
                    throw new CreateFolderError(err.message);
                }
    
                Log.sucess(`Pasta [ ${folderName} ] criada com sucesso`);
                resolve();
                return;
            });
        });
    }

    public static createTxtFile({ fileContent, fileName, filePath, }: { filePath: string, fileName: string, fileContent: string }) {
        return new Promise<void>((resolve, reject) => {
            fs.writeFile(path.join(filePath, `${fileName}.txt`), fileContent, 'utf-8', (err) => {
                if (err) {
                    throw new CreateFileError(`Falha ao criar o arquivo [ ${fileName}.txt ]`)
                }
    
                Log.sucess(`Arquivo [ ${fileName}.txt ] criado com sucesso`);
                resolve();
                return;
            });
        });
    }

    public static readTxtFile({filePath}: {filePath: string}) {
        return new Promise<string>((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    Log.error('Falha ao tentar ler o arquivo informado');
                    reject(err);
                    return;
                }

                Log.sucess(`Texto obtido com sucesso do arquivo`);
                resolve(data);
                return;
            });
        });
    }
}
