### api_consulta_debitos
Criar um API "POK" que vai servir de chamada, mas que tenha integração com Redis e que chame um Repositório.

### Dependencias usadas:
```
npm install --save express 
```
```
npm install nodemon -D
```
(-D: pois só será usado para desenvolver, quando for para produção, não será mas utilizado.)

```
npm install --save body-parser
```
```
npm install redis --save
```
### Para iniciar o servidor:
```
$ npm run dev
```
### Para utilizar o Redis dentro de um Container Docker
O primeiro passo será baixar a imagem do Redis. Para isso, execute o comando abaixo no seu terminal:
```
$ docker pull redis
```
O redis utiliza a porta 6379 como default, eu irei utilizar essa porta mapeada com o meu host. 
Para isso, execute o comando abaixo no seu terminal:
```
$ docker run --name redis13 -p 6379:6379 -d redis redis-server --appendonly no
```

### Para realizar um GET de todos os carros:
```
http://localhost:4001/cars
```
### Para realizar um GET por placa:
Substitua "placa" pelo valor(KXY7559) que você quer fazer a busca.
```
http://localhost:4001/car/"placa"
```
### Tecnologias
* Node JS
* Java Script
* Redis
