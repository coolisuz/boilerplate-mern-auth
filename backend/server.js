const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DB_LINK.replace("<password>", process.env.DB_PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connection successful"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
