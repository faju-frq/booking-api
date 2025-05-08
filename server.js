// server.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import { sequelize } from './models/index.js';
import authRoutes from './routes/auth.routes.js';
import activityRoutes from './routes/activity.routes.js';
import bookingRoutes from './routes/booking.routes.js';


const app = express();
const PORT = process.env.PORT || 3306;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Start the server
app.listen(PORT, async () => {
  try {
    await sequelize.sync({ alter: true }); // Creates/updates tables
    console.log('Database connected and models synced.');
    console.log(`Server is running on port ${PORT}`);
  } catch (err) {
    console.error('Error syncing database:', err);
  }
});
