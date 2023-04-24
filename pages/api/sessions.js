import dbConnect from "../../database/dbConnect";
import Session from "../../database/models/Session";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const sessions = await Session.find();
    return response.status(200).json(sessions);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
