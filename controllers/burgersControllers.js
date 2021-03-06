const express = require("express");
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll( (data) => {
        const burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) => {  
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
      res.json({ id: result.insertId });
    });

  });

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    burger.updateOne(      
      condition,
      (result) => {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

module.exports = router;