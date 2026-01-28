import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }
    
    // Simulate API call
    console.log("User Data:", formData);
    setMessage("✅ Account created! Redirecting...");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm rounded bg-white p-6 shadow" onSubmit={handleSignup}>
        <h1 className="mb-4 text-center text-2xl font-bold">Create Account</h1>
        
        <input 
          type="text" placeholder="Username" required
          className="mb-3 w-full rounded border px-3 py-2"
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
        <input 
          type="email" placeholder="Email" required
          className="mb-3 w-full rounded border px-3 py-2"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input 
          type="password" placeholder="Password" required
          className="mb-3 w-full rounded border px-3 py-2"
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <input 
          type="password" placeholder="Confirm Password" required
          className="mb-3 w-full rounded border px-3 py-2"
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
        />

        <button type="submit" className="w-full rounded bg-green-500 py-2 text-white hover:bg-green-600">
          Sign Up
        </button>
        {message && <p className="mt-3 text-center text-sm">{message}</p>}
      </form>
    </div>
  );
}