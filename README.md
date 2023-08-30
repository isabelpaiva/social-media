# SocialMedia

API simples em Nest.js que simula uma rede social.

A documentação da API está disponível em: [http://localhost:3000/api#/](http://localhost:3000/api#/)


## Tecnologias Utilizadas: 

- Nest.js
- Typescript
- Prisma
- Docker
- bcryptjs
- class-validator
- passport-jwt
  
## Instalação

#### Este repositório contém um arquivo Dockerfile. Siga as instruções abaixo para iniciar a aplicação usando o Docker. 

## Pré-requisitos

Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo [aqui](https://www.docker.com/get-started).

## Instruções

1. Clone este repositório para sua máquina:

```bash
$ git clone git@github.com:isabelpaiva/social-media.git
```

2. Construa a imagem do Docker:
```bash
$ docker compose up --build
# Executado na porta 3000 como padrão
```

## Instalação Local

1. Clone este repositório para sua máquina:

```bash
$ git clone git@github.com:isabelpaiva/social-media.git
```

2. Instale as dependências.

 ```bash
npm install
```

3. Rode as migrações com o Prisma

 ```bash
npx prisma migrate dev
 ```

## Configuração

1. Inicie a aplicação com o comando:

```bash
npm run start:dev
```

3. A API estará acessível em http://localhost:3000


### Banco de Dados

O projeto utiliza o PostgresSQL como banco de dados. As migrações de banco de dados necessárias são gerenciadas usando o Prisma.

Para instalar o PostgresSQL localmente, você pode [clicar aqui](https://www.postgresql.org/download/).

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users:id                  | Lista um usuário                                  | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuários                           | Qualquer usuário, não necessita token  |
| PUT    | /users/:id                 | Atualiza um usuário                               | Qualquer usuário, não necessita token  |
| DELETE | /users/:id                 | Realiza um delete no usuário                      | Qualquer usuário, não necessita token  |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /posts                     | Criação de um post                                | Apenas o dono do post                  |
| GET    | /posts                     | Lista todos os posts                              | Qualquer usuário, não necessita token  |
| GET    | /posts/:id                 | Lista um post                                     | Qualquer usuário, não necessita token  |
| PUT    | /posts/:id                 | Atualiza um post                                  | Apenas o dono do post                  |
| DELETE | /posts/:id                 | Realiza um delete no post                         | Apenas o dono do post                  |

## Requisitos do Serviço

### POST - /users

-   Rota para criação de usuário com os seguintes dados:
    -   **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo crypto;
    -   **name**: string, obrigatório;
    -   **email**: string, obrigatório e único;
    -   **password**: Deverá receber uma string, mas armazenar uma hash gerada com o **bcryptjs**;
    -   **bio**: string, obrigatório;
    -   **createdAt**: Não deve ser passado, mas gerado automaticamente;
    -   **birthDate**: string, obrigatório;
-   A rota de criação deve retornar todos os dados, com **exceção da hash** de senha;
-   Não podem ser cadastrados dois usuários com o mesmo **e-mail**;
-   A rota **não precisa de autenticação** para ser acessada.

### GET - /users

-   A rota deve retornar todos os dados dos usuários, com exceção da hash de senha;

### GET - /users/:id

-   Rota deve listar todos os users.
-   A rota não precisa de autenticação para ser acessada.

### PUT - /users/:id

-   A rota deve atualizar os dados do usuário;
-   Não deve ser possível atualizar os campos **id**;

### DELETE - /users/:id

-   A rota deve realizar um delete do usuário;

### POST - /login

-   Rota de login recebendo **email** e **password**;
-   O login deve validar se o usuário existe e validar se a senha está correta;
-   Não deve ser possível realizar o login de um usuário marcado como deletado;
-   A rota **não precisa de autenticação** para ser acessada.

### POST - /posts

-   Rota para criação de posts com os seguintes dados:
    -   **id**: Valor SERIAL. Não deve ser passado, mas gerado pelo crypto.
    -   **content**: string, obrigatório
-   A rota precisa de autenticação.

### GET - /posts

-   Rota deve listar todos os posts.
-   A rota não precisa de autenticação para ser acessada.

### GET - /posts/:id

-   Rota deve listar todos os posts de um usuário específico.
-   A rota não precisa de autenticação para ser acessada.

### PUT - /posts/:id

-   A rota deve atualizar os dados do usuário;
-   Não deve ser possível atualizar os campos **id**;
-   A rota precisa de autenticação.

### DELETE - /posts/:id
-   A rota deve realizar um delete do post;
-   A rota precisa de autenticação.
