import mongoose from "mongoose";
import { db_name } from "../constants.js";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DATABASE_URI}/${db_name}`
    );
    console.log(`DB connection succesfull: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Database connection failure: ERR ${error}`);
    process.exit(1);
  }
};

export default dbConnection;
