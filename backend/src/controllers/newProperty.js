const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
let dataProps = require("../data/dataProps");

const formatPrice = (number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

const updateKey = () => {
  dataProps.forEach((property, index) => (property.key = index + 1));
};

router.post("/properties", (req, res) => {
  const formData = req.body;
  const { price } = formData;
  const formattedPrice = formatPrice(price);

  dataProps.unshift({
    id: uuid(),
    key: null,
    ...formData,
    price: formattedPrice,
  });

  try {
    res.status(200).send({ message: "property added successfully!" });
    updateKey();
  } catch (err) {
    res.status(404).send({ message: "There was an error adding the Property" });
  }
});

module.exports = router;
