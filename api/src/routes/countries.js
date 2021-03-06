const express = require("express");
const Country = require("../models/Country");
const server = express();
const STATUS_USER_ERROR = 422;

server.use(express.json());

server.get('/countries', async function(req, res) {
    fetch('https://restcountries.com/v3/all')
    .then(p => p.json())
    .then(country => {
        Country:{
           
        }
    });

})


// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado