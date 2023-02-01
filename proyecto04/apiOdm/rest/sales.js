const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
admin.initializeApp();
const router = express.Router();

router.get('/', (req, res) => {
  const db = admin.database();
  const ref = db.ref('/sales');
  ref.once('value', snapshot => {
    res.json(snapshot.val());
  });
});

const app = express();
app.use('/endpoint', router);

exports.api = functions.https.onRequest(app);