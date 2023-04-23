import fetch from "isomorphic-unfetch";

export async function dbConnect() {
  const url = `${process.env.BACKEND_URL}/api/sessions`;
  const response = await fetch(url);
  const data = await response.json();
  return data.sessions;
}
