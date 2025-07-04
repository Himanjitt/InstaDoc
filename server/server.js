const express = require("express");
const cors = require("cors");
//const path = require("path");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRouter");

const app = express();
const port = process.env.PORT || 5015;

//app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:3000", "https://insta-doc-ten.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

//app.use(express.static(path.join(__dirname, "./client/build")));

//app.get("*", (req, res) => {
//  res.sendFile(path.join(__dirname, "./client/build/index.html"));
//});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
