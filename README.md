# Teste para vaga de estágio em front-end para a IntuitiveCare
Neste teste foi solicitado o desenvolvimento de uma interface web usando o framework VUE.JS que tem como objetivo visulizar os dados de um arquivo CSV, realizar uma pesquisa textual em qualquer coluna do arquivo, criar, deletar e editar novos cadastros, além disso, todas as alterações devem persistir no arquivo final.

![image](https://user-images.githubusercontent.com/31461967/127755926-58ab83ea-a26d-4754-b5b1-28c6902bdabc.png)

## O que foi desenvolvido:
- Uma api para acessar o arquivo, converter ele de CSV para JSON, tratar algumas inconsistências nos dados e enviar por uma rota a aprtir de uma solicitação GET;
- Uma interface web utilizando o VUE.JS que pega os dados pela API, apresenta por meio de uma tabela estilizada com bootstrap, seguindo o modelo disponibilizado pela empresa. Nessa interface é possível visualizar todos os 1.173 dados e fazer uma pesquisa pela coluna "Razão Social", sendo possível personalizar (por meio do código) qual coluna o mecanismos de pesquisa vai acessar.

## O que ainda não foi desenvolvido:
- Possibilidade o usuário realizar um CRUD dos dados da tabela e salvar no arquivo CSV.

## Tecnologias e pocotes NPM utilizadas:
- VUE.JS;
- Axios;
- Bootstrap;
- Express;
- Nodemon;
- csvtojson.

## Como executar e testar o projeto:
- Faça um git clone do repositório em um local do seu computador;
- Abra as pastas "intuitive-care-api" e "intuitive-care-app" separadamente na sua IDE de preferência e, dentro de cada pasta, abra o terminal e execute "npm i" para o NPM instalar todas as dependências;
- Na pasta "intuitive-care-app" caminhe para "src", depois "services" e abra o arquivo "api.js", nele dentro da variável "baseURL" coloque antes da porta do servidor o ip do seu computador (isso é necessário porque esse valor varia dependendo do computador);
- Após isso, para executar a api digite no terminal "npm start" e para executar o app digite no terminal "npm run serve";
- Então, para utilizar o projeto, basta entrar na URL gerada pelo servidor local do app.
