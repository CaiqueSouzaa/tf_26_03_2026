# 📁 Atividade Final — Manipulação de Arquivos com Node.js

> Projeto desenvolvido como atividade final de aula, com o objetivo de praticar a manipulação de arquivos e diretórios com Node.js, utilizando TypeScript e saída colorida no terminal com a biblioteca **chalk**.

---

## 🎯 Objetivo

Ao ser executado, o programa deve:

1. Criar automaticamente o diretório `./storage/`, caso ele ainda não exista
2. Gerar o arquivo `./storage/aula05.txt` com um conteúdo pré-definido
3. Ler o conteúdo do arquivo criado e exibi-lo no terminal
4. Exibir mensagens coloridas em cada etapa da execução, usando **chalk**

---

## 🗂️ Estrutura do Projeto

```
tf_26_03_2026/
├── src/
│   ├── main.ts                      # Ponto de entrada da aplicação
│   ├── utils/
│   │   ├── files.ts                 # Utilitários para criação e leitura de arquivos/pastas
│   │   └── log.ts                   # Utilitário de log colorido com chalk
│   └── errors/
│       ├── create_file_error.ts     # Erro customizado para falha na criação de arquivo
│       └── create_folder_error.ts   # Erro customizado para falha na criação de pasta
├── dist/                            # Saída compilada (gerada com `npm run build`)
├── storage/                         # Pasta gerada em runtime (ignorada pelo git)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| [Node.js](https://nodejs.org/) | ≥ 18.x | Runtime JavaScript |
| [TypeScript](https://www.typescriptlang.org/) | ^6.0.2 | Superset tipado do JavaScript |
| [chalk](https://github.com/chalk/chalk) | ^5.6.2 | Saída colorida no terminal |
| [`fs`](https://nodejs.org/api/fs.html) | nativo | Manipulação de arquivos e diretórios |
| [`path`](https://nodejs.org/api/path.html) | nativo | Resolução de caminhos de forma portável |

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior**
- npm (incluído com o Node.js)

---

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd tf_26_03_2026
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Compile o TypeScript

```bash
npm run build
```

> Os arquivos compilados serão gerados na pasta `./dist/`.

### 4. Execute o programa

```bash
npm start
```

---

## 💻 Saída Esperada no Terminal

Ao executar com sucesso, o terminal exibirá (com cores):

```
Pasta [ storage ] criada com sucesso       ✅ verde
Arquivo [ aula05.txt ] criado com sucesso  ✅ verde
Texto obtido com sucesso do arquivo        ✅ verde

--- Dados lidos do arquivo [ aula05.txt ] ---

Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.  ⚠️ amarelo

 --- Fim do programa ---                   ✅ verde
```

> Caso o diretório `storage` já exista em uma segunda execução, a mensagem **"A pasta [ storage ] já existe"** será exibida em amarelo, e o programa continuará normalmente.

---

## 📄 Conteúdo Gerado em `./storage/aula05.txt`

```
Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.
```

---

## 🧩 Arquitetura e Decisões Técnicas

### `src/utils/files.ts` — Classe `Files`

Centraliza as operações de I/O de forma assíncrona, usando callbacks encapsulados em `Promise`:

| Método | Descrição |
|---|---|
| `createFolder({ folderName, folderPath })` | Cria um diretório; detecta `EEXIST` e não lança erro |
| `createTxtFile({ filePath, fileName, fileContent })` | Escreve um arquivo `.txt` com encoding UTF-8 |
| `readTxtFile({ filePath })` | Lê e retorna o conteúdo de um arquivo `.txt` como `string` |

### `src/utils/log.ts` — Classe `Log`

Abstrai o uso do **chalk** em três níveis de mensagem:

| Método | Cor | Uso |
|---|---|---|
| `Log.sucess(msg)` | 🟢 Verde | Operações concluídas com sucesso |
| `Log.warning(msg)` | 🟡 Amarelo | Avisos e conteúdo de arquivos |
| `Log.error(msg)` | 🔴 Vermelho | Falhas e erros |

### `src/errors/` — Erros Customizados

`CreateFolderError` e `CreateFileError` estendem a classe nativa `Error`, formatando a mensagem de erro em vermelho com chalk diretamente no construtor.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run build` | Compila o TypeScript para JavaScript (`./dist/`) |
| `npm start` | Executa o arquivo compilado `dist/main.js` |

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte de uma atividade acadêmica.