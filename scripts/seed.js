// scripts/seed.js (one-time manual script, not exposed as a route)
import  sequelize, { Activity } from "../models/index.js";

const seedActivities = async () => {
  await sequelize.sync();

  await Activity.bulkCreate([
    {
      title: "Cricket Match",
      description: "T20 final between India and Australia.",
      location: "Chinnaswamy Stadium, Bangalore",
      datetime: new Date("2025-05-15T19:00:00"),
    },
    {
      title: "Movie Night: Inception",
      description: "Special IMAX screening.",
      location: "PVR Koramangala",
      datetime: new Date("2025-05-12T21:00:00"),
    },
  ]);

  console.log("Seeded activities!");
  process.exit();
};

seedActivities();
