import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

export const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

import userModel from "../models/user.model.js";
import activityModel from "../models/activity.model.js";
import bookingModel from "../models/booking.model.js"

export const User = userModel(sequelize);
export const Activity = activityModel(sequelize);
export const Booking = bookingModel(sequelize);

User.hasMany(Booking, {foreignKey: 'userId'});
Booking.belongsTo(User, { foreignKey: 'userId' });

Activity.hasMany(Booking, { foreignKey: 'activityId' });
Booking.belongsTo(Activity, { foreignKey: 'activityId' });
