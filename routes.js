"use strict"

const express = require("express");
const change = express.Router();
const pool = require("./pg-connection-pool")

change.get("/change", function(req, res) {
    pool.query("select * from ShoppingCart order by id asc").then(function(result) {
        res.send(result.rows)
    })
}) 
change.post("/change", function(req, res) {
    pool.query("insert into ShoppingCart (product, price, quantity) values ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then (function() {
        pool.query("select * from ShoppingCart").then(function(result) {
            res.send(result.rows)
        })
    })
    console.log(req.body)
    // console.log("Post request made")
})
change.put("/change/:id", function(req, res) {
    pool.query("update ShoppingCart set (quantity = $1::int where id = $2::int)", [req.body.quantity, req.params.id]).then (function() {
        pool.query("select * from ShoppingCart").then(function(result) {
            res.send(result.rows)
        })
    })
})
change.delete("/change/:id", function(req, res) {
    pool.query("delete from ShoppingCart where id = $1::int", [req.params.id]).then(function() {
        pool.query("select * from ShoppingCart").then(function(result) {
            res.send(result.rows)
        })
    })
})
module.exports = change;