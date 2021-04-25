# Bakery-HTTP-exercise
 
Nous allons créer une API simple permettant de gérer les produits d'une boulangerie. 

Le corps des routes est déjà présent dans **app.js**. Vous devez remplir le contenu des routes.

Pour des raisons d'organisation, nous utiliserons le module **joi** permettant de vérifier sur une le corps d'une requête JSON est bien formée.

Vous devez mettre dans **joi_request_format.js** les schéma à respecter pour ces requêtes. 

## Route /api/products (GET)

Renvoie le JSON de la liste des produits. 
Les possibles codes de retour sont: 200 et 500.

## Route /api/products/:id (GET)

Renvoie le JSON correspondant à l'ID passé dans la route
Les possibles codes de retour sont: 200, 404 et 500.

## Route /api/products/ (POST)

Permet d'ajouter un objet à la base de données (JSON), et renvoie le JSON de l'objet ajouté. 
Les possibles codes de retour sont: 200, 400 et 500.

## Route /api/products/:id (PUT)

Permet de modifier un objet à la base de données (JSON), et renvoie le JSON de l'objet modifié. 
Les possibles codes de retour sont: 200, 400, 404 et 500.

## Route /api/products/:id (DELETE)

Permet de supprimer un objet de la base de données (JSON), et renvoie le JSON de l'objet supprimé. 
Les possibles codes de retour sont: 200, 404 et 500.
