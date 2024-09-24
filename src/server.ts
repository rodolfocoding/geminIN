import "dotenv/config";
import express from "express";
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.port;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
