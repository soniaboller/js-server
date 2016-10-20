var express = require('express');
var ctrl = express.Router();

var users = [
  {
    email: 'poop@gmail.com',
    pwd: 'shit'
  },
  {
    email: 'tacotime@gmail.com',
    pwd: 'delicious'
  },
  {
    email: 'yo@gmail.com',
    pwd: 'yoyo'
  }
];

function findUserById(id){
    var offsetIndex = id - 1;
    return users[offsetIndex]
}

/* GET users listing. */
ctrl.get('/', function(req, res, next) {
  res.json(users);
});

ctrl.get('/:id', function(req, res, next){
    // console.log(req.params);
    var id = parseInt(req.params.id);
    if(typeof id === 'number'){
        res.json(findUserById(id))
    }
    // fallback if fails
    res.json({
        message: 'user not found'
    })
});


module.exports = ctrl;
