import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@stackoverflow.y06yezw.mongodb.net/?retryWrites=true&w=majority", { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    console.log(`Connected to MongoDB successfully`.bgGreen.white)
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white)
  }
}

export default connectDB