"use strict"

const express = require("express");
const change = express.Router();

const cartList = [
    {
        id: 0,
        product: `hat`,
        price: 5,
        quantity: 1
    },
    {
        id: 1,
        product: `bat`,
        price: 10,
        quantity: 5
    },
    {
        id: 2,
        product: `cat`,
        price: 15,
        quantity: 9
    }
]

change.get("/change", function(req, res) {
    res.send(cartList); //responds with colorList which is array
    console.log("GET request made");
}) 
change.post("/change", function(req, res) {
    // console.log(req.body);
    cartList.push(req.body);
    res.send(cartList);
    console.log(req.body)
    // console.log("Post request made")
})
change.put("/change/:id", function(req, res) {
    for (let i = 0; i < change.length; i++) {
        if (cartList[i].id == req.params.id) {
            cartList.splice(i, 1, req.body)
            res.send(cartList)
            break;
        }

    }
})
change.delete("/change/:id", function(req, res) {
    for (let i = 0; i < change.length; i++) {
        if (cartList[i].id == req.params.id) {
            cartList.splice(i, 1)
            res.send(cartList)
            break;
        }

    }
})
module.exports = change;