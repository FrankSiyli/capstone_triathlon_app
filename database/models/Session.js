import mongoose from "mongoose";

const { Schema } = mongoose;

const sessionSchema = new Schema({
  type: { type: String },
  subType: { type: String },
  eventDistance: { type: String },
  title: { type: String },
  backgroundColor: { type: String },
  icon: { type: String },
  details: { type: String },
});

const Session =
  mongoose.models.Session || mongoose.model("Session", sessionSchema);

export default Session;
