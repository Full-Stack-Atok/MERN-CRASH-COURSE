import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

// ✅ Connect to MongoDB BEFORE starting the server
connectDB().then(() => {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(express.json()); // Allows JSON data in the req.body

  // ✅ API Routes
  app.use("/api/products", productRoutes);

  // ✅ Start server only after DB connection is established
  app.listen(PORT, () => {
    console.log(`✅ Server started at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error("❌ Database connection failed:", error);
  process.exit(1); // Stop server if DB fails to connect
});
