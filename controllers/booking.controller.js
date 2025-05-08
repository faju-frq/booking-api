import { where } from "sequelize";
import { Booking, Activity } from "../models/index.js";
export const bookActivity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { activityId } = req.body;

    const activity = await Activity.findByPk(activityId);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    const alreadyBooked = await Booking.findOne({
      where: { userId, activityId },
    });

    if (alreadyBooked) {
      return res
        .status(400)
        .json({ message: "You already booked this activity." });
    }

    const booking = await Booking.create({ userId, activityId });

    res.status(201).json({ message: "Activity booked successfully", booking });
  } catch (err) {
    console.error("Booking error", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Booking.findAll({
      where: { userId },
      include: {
        model: Activity,
        attributes: ["id", "title", "description", "location", "datetime"],
      },
    });

    res.json(bookings);
  } catch (err) {
    console.error("Error in fetching bookings.", err);
    res.status(500).json({ message: "Server error" });
  }
};
