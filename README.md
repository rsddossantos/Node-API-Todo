# <p align="center"> Node ToDo  API</p>

API em Node.js/Typescript com um CRUD para manipular lista de tarefas.
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
    
    
    ![login](https://user-images.githubusercontent.com/61060100/147506297-16da70fd-e19c-4132-b646-7a92c915d432.png)

    <br>Para ter permissão as demais rotas é necessário enviar o parâmetro <strong>Authorization</strong> no Header, com o valor Bearer+Token.<br>
    
    ![Listar](https://user-images.githubusercontent.com/61060100/147506317-8b79661b-33cb-49fd-b015-1e5b5d6c882c.png)
    ![Nova tarefa](https://user-images.githubusercontent.com/61060100/147506364-db42e861-485c-4283-8bdf-80c781ee1a00.png)
    ![Atualizando tarefa](https://user-images.githubusercontent.com/61060100/147506325-52aed179-0e12-4705-892e-e5b5eeb26be3.png)
    ![Deletando tarefa](https://user-images.githubusercontent.com/61060100/147506377-ee210d1a-640a-48f4-834c-fd33576c6787.png)

