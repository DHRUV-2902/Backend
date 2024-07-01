import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";

const connectDB= async () =>{
      try {
        console.log('Attempting to connect to MongoDB...');
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
          console.log('Connection instance:', connectionInstance);
          console.log(`MongoDB connected: ${connectionInstance.connection.host}`);

      } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        process.exit(1); 
      }
}
export default connectDB;