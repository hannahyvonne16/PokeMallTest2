const express = require("express");

const routes = express.Router();

const dbo = require("../db/conn")

const ObjectId = require("mongodb").ObjectId;

routes.route('/product').get(function (req, res) {
    let db_connect = dbo.getDb("pokemon");
    db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json(result)
    });
});

routes.route("product/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { id: ObjectId(req.params.id)};
    db_connect
    .collection("products")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });

 
 
   module.exports = routes;