import dotenv from "dotenv";
import app from "./app.js";
import dbConnection from "./db/index.js";
import { serverPort } from "./constants.js";

dotenv.config({
  path: "../",
});

dbConnection()
  .then(() => {
    app.listen(serverPort, () =>
      console.log(`Server is listening at Port: ${serverPort}}`)
    );
  })
  .catch((error) =>
    console.error("DB connection failed and can't start server")
  );
