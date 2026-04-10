const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", (req, res) => {
  res.send("backend aplikasi manajemen risiko BTC");
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
