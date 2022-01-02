# Proyecto de examen VICTOR MANUEL ROMAN OROZCO :)


## [app](https://my-airline-app-vmro.web.app/) desplegada en hosting de firebase


## PARA CORRER EL PROYECTO EN TU LOCAL SOLO DEBES CORRER ESTOS COMANDOS


### `npm i`

### `npm start`


## Se incluyen test para el slice 

###  src/features/ShoppingCar/shoppingCartSlice.js en src/features/ShoppingCar/shoppingCartSlice.test.js

### `npm test`


## Resumen del proyecto:

La API la consumo de un JSON alojado en una `realtime database` de firebase, utilizando la herramienta que proporciona el mismo firebase, el JSON contiene un listado de unos 1,600 aeropuertos (solamente la info de la ciudad, nombre del aeropuerto, codigo, etc. Nada de info de horarios). Los horarios son 'fake' incrustados dentro del slice de `src/features/airports/airportsSlice.js`

*nota: intenté usar axios para consumir un api púbica, pero no pude porque las respuestas de esas apis no tienen el header de allow-origin y no pude consumirlo desde la app :/, así que saqué los datos del api con postman y los subí a mi firebase

Uso dos slices, uno para los aeropuertos y el otro para el carrito de compras, ambos están en `src/features`

Cree dos archivos para las vistas, uno para la busqueda de vuelos y el otro es la del carrito de compras.

En el header se puede navegar entre ambas vistas.




