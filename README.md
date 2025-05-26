# Server Side

Este é o diretório "Server" do meu projeto de desenvolvimento web para um site de "Diário de Viagens", utilizando EXPRESS e MONGOOSE.

Para iniciar o projeto, digite no prompt do diretório:
* ```bash
  npm start

Utilizando uma ferramenta de desenvolvimento de API's, como por exemplo "Postman", podemos testar os caminhos:

## Viagens
* Todas viagens: GET localhost:3001/viagens
* Buscar viagem pelo título: GET localhost:3001/viagens/"titulo"
* Cria viagem: POST localhost:3001/viagens/create
  * no body -> raw -> json
    ```bash
    {
      "title": "titulo-viagem",
      "imagepath": "caminho-diretorio-viagem",
      "imagealt": "alt-viagem"
    }
* Atualiza viagem: POST localhost:3001/viagens/update/"titulo"
  * no body -> raw -> json
    ```bash
    {
      "title": "titulo-viagem-atualizado",
      "imagepath": "caminho-diretorio-viagem-atualizado",
      "imagealt": "alt-viagem-atualizado"
    }
* Deleta viagem: POST localhost:3001/viagens/delete/"titulo"

## Diários
* Todas diarios: GET localhost:3001/diarios
* Buscar diário pelo título: GET localhost:3001/diarios/"titulo"
* Buscar diários pela viagem: GET localhost:3001/diarios/viagem/"titulo-viagem"
* Cria diário: POST localhost:3001/diarios/create
  * no body -> raw -> json
    ```bash
    {
      "datadiario" : "aaaa-mm-dd",
      "titulodiario": "titulo-diario",
      "descricaodiario": "descricao-diario",
      "criticadiario": "critica-diario",
      "idviagem": "id-viagem"
    }
* Atualiza diário: POST localhost:3001/diarios/update/"titulo"
  * no body -> raw -> json
    ```bash
    {
      "datadiario" : "aaaa-mm-dd",
      "titulodiario": "titulo-diario-atualizado",
      "descricaodiario": "descricao-diario-atualizada",
      "criticadiario": "critica-diario-atualizada",
      "idviagem": "id-viagem"
    }
* Deleta diário: POST localhost:3001/diarios/delete/"titulo"
