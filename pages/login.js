import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login system next step me Google Auth ke saath connect karenge 😎");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a] flex items-center justify-center px-4 text-white">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-400">Tradext</h1>
        <p className="text-center text-gray-400 mt-2">Login to continue</p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition"
          >
            Continue to Tradext
          </button>
        </form>

        <div className="mt-4 text-center">
          <button className="text-sm text-blue-400 hover:underline">
            Continue with Google (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
                }
