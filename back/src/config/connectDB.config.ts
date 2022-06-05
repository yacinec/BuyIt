import mongoose from "mongoose";

import { DATABASE_URL } from ".";

/**
 * Launches database connection.
 */
export const connectDB = async (): Promise<void> => {
  mongoose
    .connect(`${DATABASE_URL}`)
    .then(() => {
      console.log("Database connected successfully.");
    })
    .catch((err) => {
      console.log(err.message);
      setTimeout(connectDB, 5000);
    });
};
