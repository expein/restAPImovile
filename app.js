const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const citaRoute = require("./routes/citas")
const pedidoRoute = require("./routes/pedidos")
const clienteRoute = require("./routes/clientes")
const empleadoRoute = require("./routes/empleados")
const productosRoute = require("./routes/productos")
const serviciossRoute = require("./routes/servicios");

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
} else {
  const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

app.use(express.json());
app.use("/api", citaRoute);
app.use("/api", pedidoRoute);
app.use("/api", clienteRoute);
app.use("/api", empleadoRoute);
app.use("/api", productosRoute);
app.use("/api", serviciossRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
