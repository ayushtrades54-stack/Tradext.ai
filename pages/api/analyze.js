export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const { imageBase64 } = req.body;

    const response = await fetch(
      "https://hf.space/embed/mobenta/Price_Market_Analysis_chart/api/predict/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [imageBase64] })
      }
    );

    const result = await response.json();
    // Space returns: result.data[0] → analysis text
    res.status(200).json({ analysis: result.data[0] });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI analysis failed" });
  }
}
