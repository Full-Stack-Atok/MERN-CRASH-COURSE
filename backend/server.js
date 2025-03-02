import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productRoutes from './routes/product.route.js'
import path from 'path'

dotenv.config()
const __dirname = path.resolve()
const app = express()

console.log('MONGO_URI:', process.env.MONGO_URI)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
}

// ✅ Connect to MongoDB BEFORE starting the server
connectDB()
  .then(() => {
    
    const PORT = process.env.PORT || 5000

    app.use(express.json()) // Allows JSON data in the req.body

    // ✅ API Routes
    app.use('/api/products', productRoutes)

    // ✅ Start server only after DB connection is established
    app.listen(PORT, () => {
      console.log(`✅ Server started at http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error('❌ Database connection failed:', error)
    process.exit(1) // Stop server if DB fails to connect
  })
