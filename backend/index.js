import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/lib/db.js";
import cors from "cors";
import authRoute from "./src/routes/auth.route.js";
import productRoute from "./src/routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: `${process.env.CLIENT_URL}`,
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error:", err));
