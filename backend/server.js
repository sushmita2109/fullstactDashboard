import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dashboard")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  company: String,
  customer: String,
  country: String,
  stock: Number,
  rating: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);

app.get("/", (req, res) => res.send("Api is running"));
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: "Failed to add product" });
  }
});

const PORT = process.env.PORT || 5544;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
