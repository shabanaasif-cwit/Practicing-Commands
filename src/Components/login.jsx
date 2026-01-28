import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUser = {
      email: "admin@example.com",
      password: "123456",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      setMessage("✅ Login successful");
    } else {
      setMessage("❌ Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm rounded bg-white p-6 shadow">
        <h1 className="mb-4 text-center text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="admin@example.com"
          className="mb-3 w-full rounded border px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="123456"
          className="mb-3 w-full rounded border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-500 py-2 text-white"
        >
          Login
        </button>

        {message && (
          <p className="mt-3 text-center text-sm">{message}</p>
        )}
      </form>
    </div>
  );
}