import dbConnect from "../../database/dbConnect";
import Session from "../../database/models/Session";

export default async function handler(req, res) {
  let { db } = await dbConnect();

  const sessions = await Session.find({});

  res.status(200).json({ sessions });
}
