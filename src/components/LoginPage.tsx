import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLogin } from "../mocks/mockAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await mockLogin(username, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Failed to login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="w-full max-w-xs p-6 m-4 rounded shadow-lg bg-white sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl border-2 border-gray-200">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mb-3 px-3 py-2 border rounded w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-3 px-3 py-2 border rounded w-full"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
