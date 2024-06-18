//requerimos express express
const express = require("express");
const app = express();
// nos conectamos al puerto 
const port = 3000;
// requerimos mongoose
const mongoose = require("mongoose");
// definimos el archivo de las rutas
const userRoutes = require("./routes/user-route");
// requerimos cors
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("running");
});

app.use(userRoutes);
async function connectDb() {
  await mongoose.connect("mongodb+srv://andresfcristancho:w7tNofOg2fXh3C8L@cluster0.f0fizjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    dbName: "UsersDb",
  });
}
connectDb().catch((err) => console.error(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
