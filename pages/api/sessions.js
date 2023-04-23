import dbConnect from "../../database/dbConnect";

export default async function handler(req, res) {
  const sessions = await dbConnect();
  res.status(200).json({ sessions });
}
