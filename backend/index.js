const express = require('express');

const app = express();
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Oministack 11.0',
        Aluno: 'Bruno Luis'
    })
});
app.listen(3333);