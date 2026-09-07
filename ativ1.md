Atividade 1:

1) Incialmente foi definida as tabelas principais para funcionar o sistema de comparação dos preços, a tabela de produtos (responsavel por armazenar as informaçoes cadastrais dos itens) e a tabela de ofertas(responsavel por registrar os preços coletados em diferentes estabelecimentos vinculados a cada produto).
2)sim, foi utilizado migrations estruturadas nos arquivos SQL gerenciados por um script, foi utilizada 2 migrations. A tabela_base cria a estrutura fundamentaldo banco de dados, estabelecendo a tabela de produtos. A ofertas cria a tabela de ofertas e define as chaves estrangeiras que relacionam os preços aos seus respectivos produtos.
3)O arquivo responsavel por preencher o banco de dados com os registros iniciais esta localizado na raiz da pasta backend "backend/seed.sql".
4)Os endpoints priorizados inicialmente foi:
-Get / produtos: retorna a lista de todos os produtos cadastrados.
-Post /produtos: permite o cadastro de um novo produto no sistema.
-Get /ofertas: Lista todas as ofertas de preços cadastradas.
-Post /ofertas: registra uma nova oferta de preço vinculadaa um produto.

Essas endpoints foram priorizadas pois elas formam o nucleo funcional indispensável do sistema. sem a capacidade de cadastrar e consultar produtos e suas respectivas ofertas, nenhuma outra funcionalidade segundaria ou regra de negocio analítica conseguiria operar, estabelecendo assim a fundação lógica para o consumo da API.

5) Sim, Estou utilizando o Express.js em conjunto com o TypeScript para estruturar, gerenciar as rotas e escrever os endpoints da API de forma modular.