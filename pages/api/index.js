import dbConnect from "../../lib/dbConnect";
import Session from "../../models/sessionModel";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const sessions = await Session.find({});
        res.status(200).json({ success: true, data: sessions });
        return sessions.map((session) => session.toJSON());
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const session = await Session.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: session });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
