const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({message: 'votre requete est bon'})
})

module.exports = app;