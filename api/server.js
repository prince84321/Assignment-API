const express = require("express");
const app = express();
const cors = require("cors");

const autoCompleteData = [
  "Asparagus",
  "Beetroot",
  "Broccoli",
  "Cabbage",
  "Carrot",
  "Cauliflower",
  "Celery",
  "Corn",
  "Eggplant",
  "Lettuce",
  "Mushroom",
  "Onion",
  "Parsnip",
  "Pea",
  "Potato",
  "Pumpkin",
  "Radish",
  "Spinach",
  "Tomato",
  "Turnip",
];

app.use(cors());

app.get("/api/search", (req, res) => {
  const query = req.query.q || "";
  const filteredData = autoCompleteData.filter((item) =>
    item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  res.json(filteredData);
});

app.listen(4000, () => {
  console.log("API listening on port 4000");
});
