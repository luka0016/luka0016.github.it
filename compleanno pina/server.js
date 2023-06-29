const express = require('express');
const app = express();
const path = require('path');

// Imposta la porta del server
const port = process.env.PORT || 3000;

// Configura il percorso dei file statici
app.use(express.static(path.join(__dirname, 'public')));

// Invia il file HTML principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Avvia il server
app.listen(port, () => {
    console.log(`Server avviato sulla porta ${port}`);
});
