# To-Do List Application

## Descrição

Esta é uma aplicação web de lista de tarefas (To-Do List) que permite aos usuários criar, visualizar, atualizar e excluir tarefas. A aplicação foi desenvolvida utilizando tecnologias modernas no front-end e back-end, oferecendo uma experiência rápida e responsiva.

## Tecnologias Utilizadas

### Front-End

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de construção rápida para projetos modernos de front-end.
- **Tailwind CSS**: Framework de CSS para estilização rápida e customizável.
- **React-Hook-Form**: Biblioteca para gerenciamento de formulários em React.
- **PostCSS**: Ferramenta para transformar CSS com plugins.
- **Integração com API**: Comunicação com o back-end usando requisições assíncronas.

### Back-End

- **Express**: Framework para Node.js para criar servidores web.
- **Router**: Gerenciamento de rotas no Express.
- **Middlewares**: Validação e manipulação de requisições.
- **Docker**: Containerização do banco de dados.
- **MySQL**: Banco de dados relacional.

## Instalação

### Pré-requisitos

- Node.js
- Docker

### Passos para Configuração

1. Clone o repositório:

```bash
git clone https://github.com/Bahiy/ToDoList.git
```

2. Navegue até o diretório do projeto:

```bash
cd todolist
```

3. Instale as dependências do front-end:

```bash
cd frontend/todolist
npm install
```

4. Instale as dependências do back-end:

```bash
cd ../backend
npm install
```

5. Inicie o servidor back-end:

```bash
npm start
```

6. Inicie o servidor front-end:

```bash
cd ../frontend
npm run dev
```

## Funcionalidades

- **Adicionar Tarefas**: Permite ao usuário adicionar novas tarefas à lista.
- **Visualizar Tarefas**: Exibe a lista de tarefas com detalhes.
- **Atualizar Tarefas**: Permite a edição das tarefas existentes.
- **Excluir Tarefas**: Permite a remoção de tarefas da lista.
- **Validação**: As entradas são validadas usando middlewares no back-end.
- **Persistência de Dados**: Dados armazenados em um banco de dados MySQL containerizado com Docker.

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma nova branch: `git checkout -b feature/nova-feature`.
3. Faça as alterações necessárias e commit: `git commit -m 'Adiciona nova funcionalidade'`.
4. Envie para o seu fork: `git push origin feature/nova-feature`.
5. Abra um Pull Request para análise.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
