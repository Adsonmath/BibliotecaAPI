# Gerenciador de Biblioteca

Este é um projeto de exemplo para a criação de um sistema de gerenciamento de biblioteca usando Node.js, Express e Sequelize com um banco de dados MySQL.

## Estrutura do Projeto

- **config/**: Contém a configuração do banco de dados.
- **controllers/**: Contém os controladores para as rotas da API.
- **migrations/**: Contém os arquivos de migração do banco de dados.
- **models/**: Contém os modelos do Sequelize.
- **routes/**: Contém as definições das rotas da API.
- **seeders/**: Contém os seeders para popular o banco de dados com dados iniciais.
- **index.js**: Arquivo principal para iniciar o servidor Express.

## Pré-requisitos

- Node.js
- npm ou yarn
- MySQL

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/gerenciador_biblioteca.git
    cd gerenciador_biblioteca
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
    ```env
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=nome_do_banco
    DB_HOST=localhost
    ```

4. Configure o banco de dados em `config/config.js` (se necessário).

5. Inicialize a estrutura do banco de dados:
    ```bash
    npx sequelize-cli db:migrate
    ```

6. Popule o banco de dados com dados iniciais:
    ```bash
    npx sequelize-cli db:seed:all
    ```

## Estrutura das Tabelas

### Livro

| Campo         | Tipo       | Descrição                       |
|---------------|------------|---------------------------------|
| id            | INTEGER    | Chave primária                  |
| titulo        | STRING     | Título do livro                 |
| descricao     | TEXT       | Descrição do livro              |
| anoPublicacao | INTEGER    | Ano de publicação do livro      |
| autorId       | INTEGER    | Chave estrangeira para Autor    |
| createdAt     | DATE       | Data de criação                 |
| updatedAt     | DATE       | Data de atualização             |

### Autor

| Campo      | Tipo       | Descrição                       |
|------------|------------|---------------------------------|
| id         | INTEGER    | Chave primária                  |
| nome       | STRING     | Nome do autor                   |
| biografia  | TEXT       | Biografia do autor              |
| createdAt  | DATE       | Data de criação                 |
| updatedAt  | DATE       | Data de atualização             |

### Usuario

| Campo      | Tipo       | Descrição                       |
|------------|------------|---------------------------------|
| id         | INTEGER    | Chave primária                  |
| nome       | STRING     | Nome do usuário                 |
| email      | STRING     | Email do usuário                |
| senha      | STRING     | Senha do usuário                |
| createdAt  | DATE       | Data de criação                 |
| updatedAt  | DATE       | Data de atualização             |

## Uso

### Rotas da API

#### Livros

- **GET /api/livros**: Lista todos os livros
- **GET /api/livros/:id**: Obtém um livro pelo ID
- **POST /api/livros**: Cria um novo livro
- **PUT /api/livros/:id**: Atualiza um livro pelo ID
- **DELETE /api/livros/:id**: Exclui um livro pelo ID

#### Autores

- **GET /api/autores**: Lista todos os autores
- **GET /api/autores/:id**: Obtém um autor pelo ID
- **POST /api/autores**: Cria um novo autor
- **PUT /api/autores/:id**: Atualiza um autor pelo ID
- **DELETE /api/autores/:id**: Exclui um autor pelo ID

#### Usuarios

- **GET /api/usuarios**: Lista todos os usuários
- **GET /api/usuarios/:id**: Obtém um usuário pelo ID
- **POST /api/usuarios**: Cria um novo usuário
- **PUT /api/usuarios/:id**: Atualiza um usuário pelo ID
- **DELETE /api/usuarios/:id**: Exclui um usuário pelo ID

## Inicialização do Servidor

Para iniciar o servidor, execute:
```bash
npm start
