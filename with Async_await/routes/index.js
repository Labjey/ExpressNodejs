var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  //response passed as param
  getData(res);
});

async function getData(response) {
  try {
    var retrivedData = await axios.get('http://jsonplaceholder.typicode.com/users/');
    response.end(JSON.stringify(retrivedData.data));
  }
  catch (error) {
    response.end(JSON.stringify(error));
  }
}

module.exports = router;