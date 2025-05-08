import { DataTypes } from "sequelize";


const bookingModel =(sequelize) =>{
  const booking =sequelize.define("booking",{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })
  return booking;
}

export default bookingModel;