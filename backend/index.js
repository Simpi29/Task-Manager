const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use(cors({
  origin: ["https://deploy-mern-1whq.vercel.app"],
  methods: ["POST", "GET", "PUT", "PATCH", "DELETE"], // Include PUT, PATCH, and DELETE methods
  credentials: true
}));

mongoose
.connect(
 // "mongodb+srv://Simpi:Sd2771825@@cluster0.r0ovj38.mongodb.net/"
  "mongodb+srv://simpi:simpi@cluster0.nbpp3nj.mongodb.net/"
 
)
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(3000, () => {
  console.log("Server Started");
});
