const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const mongoURI = 'mongodb://admin:fakepass@ds115436.mlab.com:15436/savedrecipes';
mongoose.connection.openUri(mongoURI);

const Recipe = mongoose.model('Recipe', {
  uri: String,
  name: String,
  image: String,
  url: String,
  source: String,
  ingredients: Array,
});


// GET api to express server.js
router.get('/myrecipes', (req, res) => {
  Recipe.find((err, recipes) => {
    if (err) {
      return res.send(err);
    }
    return res.json(recipes);
  });
});
// POST api to express server.js
router.post('/myrecipes', (req, res) => {
  Recipe.create({
    uri: req.body.uri,
    name: req.body.name,
    image: req.body.image,
    url: req.body.url,
    source: req.body.source,
    ingredients: req.body.ingredients,
  }, (err) => {
    if (err) {
      res.send(err);
    }
    Recipe.find((error, recipes) => {
      if (error) {
        return res.send(error);
      }
      return res.json(recipes);
    });
  });
});

// Delete api to express server.js
router.delete('/myrecipes/:id', (req, res) => {
  Recipe.remove({
    _id: req.params.id,
  }, (err) => {
    if (err) {
      return res.send(err);
    }
    return Recipe.find((error, recipes) => {
      if (err) {
        return res.send(err);
      }
      return res.json(recipes);
    });
  });
});

module.exports = router;
