import { useState } from "react";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Upload chart first");
    const base64 = await toBase64(file);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageBase64: base64 })
    });

    const data = await res.json();
    setAnalysis(data.analysis);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl mb-4">Tradext AI Dashboard</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
      >
        Analyze with AI
      </button>

      {analysis && (
        <div className="mt-6 p-4 bg-gray-800 rounded">
          <h2 className="text-xl mb-2">AI Analysis:</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}

// helper function
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // remove "data:image/..."
    reader.onerror = (error) => reject(error);
  });
