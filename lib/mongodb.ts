import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    console.log("MONGO DB CONNECTED");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;
