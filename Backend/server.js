const express = require("express");
const { connectDatabase } = require("./databaseConnection/databaseConnection");
const { router } = require("./authrouter/authrouter");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/",router);

const PORT = process.env.PORT || 8080;


connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listining at server ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
    return {
      error: true,
      details: e,
    };
  });
