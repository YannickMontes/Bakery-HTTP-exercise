const fs = require('fs');
const express = require('express');

const format = require('./joi_request_format');
const DATABASE = './data/products.json';

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to the bakery.");
});

app.get('/api/products', (req, res) => {
    //Si erreur interne => envoyer http 500

    //Renvoyer la JSON de la liste des produits
});

app.get('/api/products/:id', (req, res) => {
    //Si l'id passé n'existe pas => renvoyer 404

    //Si erreur interne ==> Renvoyer 500

    //Renvoyer le JSON du produit correspondant à l'id passé
});

app.post('/api/products', (req, res) => {
    //Si la requête est mal formée => renvoyer 400

    //Si erreur interne ==> Renvoyer 500

    //Ajouter le produit a la BD
    //Renvoyer le JSON du produit ajouté
});

app.put('/api/products/:id', (req, res) => {
    //Si la requête est mal formée => renvoyer 400
    //Si l'id passé n'existe pas => renvoyer 404
    //Si erreur interne ==> Renvoyer 500

    //Modifier le produit dans la BD
    //Renvoyer le JSON du produit modifié
});

app.delete('/api/products/:id', (req, res) => {
    //Si l'id passé n'existe pas => renvoyer 404
    //Si erreur interne ==> Renvoyer 500

    //Supprimer le produit de la BD
    //Renvoyer le JSON du produit supprimé (optionnel)
});

app.listen(3000, () => 'Listening on port 3000...');