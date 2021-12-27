# <p align="center"> Node ToDo  API</p>

API em Node.js com Typescript com um CRUD para atualizar lista de tarefas.
Temos uma autenticação com token JWT que deverá ser gerado pela rota login e será exigido para acesso as demais rotas.
<hr>

### Instruções:

- Criar uma base em banco PostgreSql e utilizar o dump que encontra-se na raiz do projeto <strong>dump-postgres-202112262053</strong>. Será criado duas tabelas, uma com um usuário para o login e outra que irá armazenar as tarefas.
- Atualizar as dependências:<br><br>
  <code>npm install</code>
  <br><br>
- Criar na raiz do projeto o arquivo <strong>.env</strong> com os seguintes parâmetros:<br><br>
  
    PORT=4000 --socket desejado<br>
    PG_DB=postgres --nome do banco<br>
    PG_USER=postgres --usuário do banco<br>
    PG_PASSWORD=31032012 --senha<br>
    PG_PORT=5432 --porta do banco<br>
    JWT_SECRET=1234 --secret para geração do JWT<br><br><hr>
  
    ENDPOITS<br><br>
  
    http://127.0.0.1:4000/login
  
    <br>Para ter permissão as demais rotas é necessário enviar o parâmetro <strong>Authorization</strong> no Header, com o valor Bearer+Token.<br>
    Ex: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwMzE1MTc3fQ.cf4XaoeYGn5IkPWOyjwtw8-orVtrWWnEZvdlN1PmBDA