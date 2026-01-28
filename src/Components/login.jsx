import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate(); // 2. Initialize the hook

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUser = {
      email: "admin@example.com",
      password: "123456",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      setMessage("✅ Login successful");
      
      // 3. Redirect to the logout (or dashboard) page after 1.5 seconds
      setTimeout(() => {
        navigate("/logout");
      }, 1500);
      
    } else {
      setMessage("❌ Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm rounded bg-white p-6 shadow" onSubmit={handleLogin}>
        <h1 className="mb-4 text-center text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="admin@example.com"
          className="mb-3 w-full rounded border px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="123456"
          className="mb-3 w-full rounded border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Changed to type="submit" for better accessibility */}
        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600 transition-colors"
        >
          Login
        </button>

        {message && (
          <p className={`mt-3 text-center text-sm ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}