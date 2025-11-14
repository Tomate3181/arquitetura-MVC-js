# Cadastro de Produtos com Padrão MVC

Este é um projeto simples de cadastro de produtos, criado para demonstrar a aplicação do padrão de arquitetura **MVC (Model-View-Controller)** utilizando HTML e JavaScript.

## O que é MVC?

MVC é um padrão que organiza o código de uma aplicação em três partes principais, com o objetivo de separar a lógica de dados da interface com o usuário. Isso torna o código mais organizado, fácil de manter e de escalar.

As três camadas são:

### 1. Model (Modelo)

É a camada responsável por gerenciar os dados e as regras de negócio. Ele armazena, busca e manipula as informações. O Model não sabe como os dados serão apresentados, apenas como eles devem ser estruturados e gerenciados.

*   **Neste projeto:** O Model é a parte do JavaScript que contém o array onde os produtos são guardados e a função para adicionar um novo produto a essa lista.

### 2. View (Visão)

É a camada de apresentação, ou seja, tudo aquilo que o usuário vê e com o qual ele interage. Geralmente, é o código HTML e CSS. A sua única função é exibir os dados que recebe e capturar as ações do usuário (como cliques e preenchimento de formulários).

*   **Neste projeto:** A View é o arquivo `view.html`. Ele contém o formulário para o cadastro do produto e a lista onde os produtos cadastrados são exibidos.

### 3. Controller (Controlador)

É o intermediário que conecta o Model e a View. Ele recebe as ações do usuário vindas da View, processa essas requisições, aciona as devidas atualizações no Model e, por fim, comanda a View para que ela se atualize e exiba o resultado para o usuário.

*   **Neste projeto:** O Controller é a parte do JavaScript que "escuta" o evento de envio do formulário. Quando o usuário clica em "Salvar", ele pega os dados da View, envia para o Model e, em seguida, manda a View se atualizar para mostrar o novo produto na lista.

## Fluxo de Funcionamento

1.  O usuário preenche o formulário na **View**.
2.  Ao clicar no botão, o **Controller** captura essa ação.
3.  O **Controller** pega os dados e os envia para o **Model**.
4.  O **Model** salva o novo produto.
5.  O **Controller** avisa a **View** que os dados mudaram, e a **View** se atualiza para exibir o novo produto.