import fetch from "node-fetch";

export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) return res.status(400).send("Missing url query parameter");

  try {
    const response = await fetch(target);
    const data = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}
