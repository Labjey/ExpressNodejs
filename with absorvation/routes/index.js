var express = require('express');
var router = express.Router();
var axios = require('axios');
const { from } = require("rxjs");

/* GET home page. */
router.get('/', function (req, res, next) {
  from(axios.get('http://jsonplaceholder.typicode.com/users/'))
    .subscribe(jsonresponseJeso => {
      res.end(JSON.stringify(jsonresponseJeso.data));  
    });
});

module.exports = router;