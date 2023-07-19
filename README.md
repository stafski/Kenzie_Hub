# Kenzie Hub - Gerenciador de Conhecimentos

Este projeto foi desenvolvido durante o programa de estudos da Kenzie Academy Brasil. Foi criada uma aplicação Front-End em React, onde os usuários podem se cadastrar e registrar o nivel de proficiência em tecnologias.

## Descrição

O Kenzie Hub é uma plataforma para desenvolvedores, onde os usuários podem criar uma conta e registrar as tecnologias que utilizam para o seu trabalho e seu nível de proficiência com cada tecnologia.

## Funcionalidades

- **Autenticação:**

  - Permitir o login e cadastro de usuários.
  - Redirecionar o usuário para o painel de controle após o login.
  - Manter o usuário no painel de controle caso ele já esteja autenticado com um token válido e recarregue a página (F5).
  - Bloquear o acesso ao painel de controle para usuários não autenticados e redirecioná-los para a página de login em caso de tentativa de acesso não autorizado.

- **Tecnologias**:
  - Listar todas as tecnologias disponíveis.
  - Permitir que usuários autenticados cadastrem novas tecnologias.
  - Permitir que usuários autenticados atualizem o status de uma tecnologia existente.
  - Não permitir atualizar o título de uma tecnologia.
  - Permitir que usuários autenticados excluam uma tecnologia.
  - Atualizar automaticamente a lista de tecnologias após qualquer alteração (edição, exclusão e cadastro).

## API

Foi utilizada a seguinte API para este projeto: **Kenzie Hub API**

URL base: https://kenziehub.herokuapp.com/

## Tecnologias Utilizadas

O Kenzie Hub foi desenvolvido em ReactJS e utiliza as seguintes bibliotecas:

- Axios: Para fazer as requisições da API.
- Styled-components: Para estilizar a aplicação.
- React-router-dom: Para criar rotas de páginas.
- React-hook-form: Para pegar os dados dos formulários.
- Yup: Para validação de dados.
- React-toastify: Para mostrar mensagens de toast após requisições.

## Lógica de Programação

No projeto Kenzie Hub, a lógica de programação foi aplicada para implementar várias funcionalidades relacionadas à autenticação do usuário, gerenciamento de tecnologias e manipulação de dados. A aplicação utiliza React Hook Form e Zod para lidar com os dados dos formulários e validar a entrada do usuário, respectivamente. Além disso, realiza requisições POST para a API para o login e cadastro de usuários, e requisições GET para obter informações do usuário e gerenciar as tecnologias.

## Link

[Kenzie Hub](https://kenzie-hub-orpin-beta.vercel.app)

## Autor

[Leonardo Stafski](https://github.com/stafski)

# Kenzie Hub - Knowledge Manager

This project was developed during the study program at Kenzie Academy Brasil. A Front-End application was created using React, where users can register and record their proficiency level in technologies.

## Description

Kenzie Hub is a platform for developers, where users can create an account and register the technologies they use for their work, along with their proficiency level for each technology.

## Features

- **Authentication:**

  - Allow users to login and register.
  - Redirect the user to the control panel after login.
  - Keep the user on the control panel if they are already authenticated with a valid token and reload the page (F5).
  - Block access to the control panel for non-authenticated users and redirect them to the login page if an unauthorized access attempt is made.

- **Technologies:**

  - List all available technologies.
  - Allow authenticated users to add new technologies.
  - Allow authenticated users to update the proficiency status of an existing technology.
  - Do not allow updating the title of a technology.
  - Allow authenticated users to delete a technology.
  - Automatically update the list of technologies after any changes (editing, deletion, and addition).

## API

The following API was used for this project: **Kenzie Hub API**

Base URL: https://kenziehub.herokuapp.com/

## Used Technologies

Kenzie Hub was developed using ReactJS and uses the following libraries:

- Axios: To make API requests.
- Styled-components: To style the application.
- React-router-dom: To create page routes.
- React-hook-form: To get form data.
- Yup: For data validation.
- React-toastify: To display toast messages after requests.

## Programming Logic

In the Kenzie Hub project, programming logic was applied to implement various functionalities related to user authentication, technology management, and data manipulation. The application uses React Hook Form and Zod to handle form data and validate user input, respectively. Additionally, it makes POST requests to the API for user login and registration, and GET requests to obtain user information and manage technologies.

## Link

[Kenzie Hub](https://kenzie-hub-orpin-beta.vercel.app)

## Author

[Leonardo Stafski](https://github.com/stafski)
