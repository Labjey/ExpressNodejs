var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {

  axios.get('http://jsonplaceholder.typicode.com/users/?id=1')
    .then(function (response) {
      res.end(JSON.stringify(response.data));
    })
    .catch(function (error) {

        res.render('error', { title: error });
    });
});

module.exports = router;