import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleAnalyze = async () => {
    if (!file) return alert("Upload a chart first!");
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64 = reader.result;

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64 }),
      });

      const data = await res.json();
      localStorage.setItem("tradext_result", JSON.stringify(data));
      window.location.href = "/dashboard";
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] text-white flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-400">Tradext</h1>
        <p className="text-center text-gray-400 mt-2">AI Powered Chart Intelligence</p>

        <div className="mt-8 border-2 border-dashed border-blue-500/40 rounded-xl p-6 text-center">
          <input type="file" onChange={handleUpload} className="hidden" id="upload" />
          <label htmlFor="upload" className="cursor-pointer">
            {preview ? (
              <img src={preview} className="rounded-lg mx-auto" />
            ) : (
              <p className="text-gray-400">Drag & Drop chart or click to upload</p>
            )}
          </label>
        </div>

        <button
          onClick={handleAnalyze}
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold"
        >
          {loading ? "Analyzing..." : "Analyze with AI"}
        </button>

        <p className="text-center text-xs text-gray-500 mt-3">
          Free AI Market Insight Engine
        </p>
      </div>
    </div>
  );
}
