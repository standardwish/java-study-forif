import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
const connectMongoDB = async () => {
  console.log(uri);

  try {
    if (typeof uri === "string") {
      mongoose.connect(uri);
      console.log("MONGODB ACCESSED");
    }
  } catch (e) {
    console.log(e);
    console.log("MONGODB DENIED");
  }
};

export default connectMongoDB;
