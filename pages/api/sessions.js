import dbConnect from "../../database/dbConnect";

export default async function handler(req, res) {
  let { db } = await dbConnect();

  const sessions = await db.collection("sessions").find().toArray();

  res.status(200).json({ sessions });
}
