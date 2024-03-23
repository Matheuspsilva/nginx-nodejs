# Proxy Reverso com Nginx, Node.js e MySQL

Este projeto demonstra a implementação de um proxy reverso usando Nginx juntamente com uma aplicação Node.js e banco de dados MySQL. A ideia principal é que quando um usuário acessa o Nginx, este faz uma chamada para nossa aplicação Node.js, que então adiciona um registro ao nosso banco de dados MySQL, inserindo um nome na tabela `people`.

## Tecnologias Utilizadas

- Node.js
- MySQL
- Nginx
- Docker
- Docker Compose

## Detalhes da Implementação

### Aplicação Node.js

A aplicação Node.js é responsável por lidar com solicitações recebidas do Nginx. Ela expõe duas rotas:

1. **POST `/add/:name`**: Adiciona um novo nome ao banco de dados, inserindo-o na tabela `people`.

2. **GET `/`**: Recupera a lista de nomes do banco de dados e os retorna juntamente com a mensagem "Full Cycle Rocks!" em formato HTML.

### Banco de Dados MySQL

O banco de dados MySQL armazena os nomes adicionados pela aplicação Node.js. Ele consiste em uma única tabela chamada `people` com uma coluna para o nome.

### Proxy Reverso Nginx

O Nginx atua como um proxy reverso, encaminhando solicitações de clientes para a aplicação Node.js. Ele ouve as solicitações HTTP recebidas na porta 80 e as encaminha para a aplicação Node.js em execução na porta 3000.

### Configuração Docker

O projeto é containerizado usando Docker e orquestrado com Docker Compose. O arquivo `docker-compose.yml` define serviços para a aplicação Node.js, banco de dados MySQL e proxy reverso Nginx. Ele garante que todos os componentes estejam conectados e funcionando corretamente.

## Instruções de Execução

1. Clone o repositório:

```bash
git clone <url_do_repositorio>
cd nginx-node-mysql
```

2. Execute o Docker Compose:

```bash
docker-compose up -d
```