import connect from "../../database/connect";
import Session from "../../database/models/Session";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await connect();

  if (request.method === "GET") {
    const sessions = await Session.find();
    console.log(sessions);
    return response.status(200).json(sessions);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
