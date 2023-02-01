var express = require('express');
var router = express.Router();
const functions = require('firebase-functions');
const admin = require('firebase-admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/sales', function(req, res, next){
  const db = admin.database();
  const ref = db.ref('/sales');
  ref.once('value', snapshot => {
    res.json(snapshot.val());
  });
});
module.exports = router;
