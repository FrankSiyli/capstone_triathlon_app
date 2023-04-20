import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  type: { type: String },
  subType: { type: String },
  eventDistance: { type: String },
  title: { type: String },
  backgroundColor: { type: String },
  icon: { type: String },
  details: { type: String },
});

let Session;
try {
  Session = mongoose.model("Session");
} catch {
  Session = mongoose.model("Session", SessionSchema);
}

export default Session;
