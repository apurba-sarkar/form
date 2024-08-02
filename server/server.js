const express = require("express");
const app = express();
const router = require("./routers/auth-router");
const connectdb = require("./utils/db");
const cors = require("cors")
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials: true,
};
app.use(cors(corsOptions));

app.use("/", router);

const PORT = 3000;
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port number ", PORT);
  });
});
