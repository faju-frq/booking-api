import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import dbConfig from "../config/db.config.js";

// Load environment variables from .env file (only for local dev)
dotenv.config();

// Get the MySQL URL from the environment variable for production
const dbURL = process.env.MYSQL_URL;

const sequelize = new Sequelize(dbURL, {
    dialect: "mysql",
    logging: false,
  });

import userModel from "../models/user.model.js";
import activityModel from "../models/activity.model.js";
import bookingModel from "../models/booking.model.js";

// Initialize models
export const User = userModel(sequelize);
export const Activity = activityModel(sequelize);
export const Booking = bookingModel(sequelize);

// Define model relationships
User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

Activity.hasMany(Booking, { foreignKey: 'activityId' });
Booking.belongsTo(Activity, { foreignKey: 'activityId' });

export default sequelize;
