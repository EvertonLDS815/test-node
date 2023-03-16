const express = require("express");
const app = express();
const port = process.env.PORT || 2777;
const router = require("./routes/router");
const connetToDB = require("./database/db");
require("dotenv").config();

connetToDB();

app.use(router);

app.listen(port, () =>
  console.log(`🚀 My Server is running on port http://localhost:${port}`)
);
