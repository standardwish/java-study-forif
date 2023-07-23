import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const connectMongoDB = async () => {
  try {
    if (typeof uri === "string") {
      mongoose.connect(uri);
    }
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDB;
