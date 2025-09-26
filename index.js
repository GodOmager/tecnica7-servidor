import express from 'express';

const aplication = express();

const PORT = 3000;

// Funciones

function handleListen(port) {
    console.log(`>>> Servidor montado en puerto ${port}.`);
};

// Controladores



// Inicializar

aplication.listen(PORT, handleListen);