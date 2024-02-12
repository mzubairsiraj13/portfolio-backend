import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_PROXY,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(
  express.json({
    limit: "32kb",
  })
);
app.use(
  urlencoded({
    extended: true,
    limit: "32kb",
  })
);
app.use(express.static('public'))

export default app;
