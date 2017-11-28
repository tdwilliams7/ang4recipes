const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:fakepass@ds115436.mlab.com:15436/savedrecipes';
mongoose.connection.openUri(mongoURI);

var Recipe = mongoose.model('Recipe', {
    uri: String,
    name: String,
    image: String,
    url: String,
    source: String
});


/* GET api listing. */
router.get('/myrecipes', (req, res)=>{
    Recipe.find( (err, recipes) =>{
        if (err)
            return console.log(err);
        res.json(recipes);
    });
});

router.post('/myrecipes', (req, res) =>{
    console.log(req);
    Recipe.create({
        'uri': req.body.uri,
        'name': req.body.label,
        'image': req.body.image,
        'url': req.body.url,
        'source': req.body.source
    }, (err, recipe) =>{
        if (err)
            res.send(err);
        Recipe.find( (err, recipes) =>{
            if (err)
                res.send(err);
            res.json(recipes);
        });
    });
});

// router.delete('/myrecipes/:id', (req, res) => {
//     Recipe.remove({
//         _id: req.params.id
//     }, function(err, recipe){
//         if (err)
//             return console.log(err);
//         Recipe.find( (err, recipes) =>{
//             if (err)
//                 return console.log(err);
//             res.json(recipes);
//         });
//     });
// });

module.exports = router;