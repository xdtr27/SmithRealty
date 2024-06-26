const express = require("express");
const router = express.Router();
const dataProps = require("../data/dataProps");

router.get("/properties/:id", (req, res) => {
  const key = parseInt(req.params.id);
  const propertySelected = dataProps.find((property) => property.key === key);

  propertySelected === undefined
    ? res.send({ message: "No records with this key were found" })
    : res.send(propertySelected);
});

module.exports = router;
