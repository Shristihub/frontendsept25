import React, { useState } from "react";
import { registerUser } from "../../service/AuthService";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    let user = {
      username,
      password,
    };
    //call the method of service layer to register the user
    let response = await registerUser(user);
    // console.log(response.status);
    navigate("/login"); //redirect to login page after successful registration
  };

  return (
   <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6 my-8">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Register</h2>

  <form onSubmit={handleRegister} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Username
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      className="w-full rounded-md bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
    >
      Register
    </button>
  </form>

  <p className="mt-4 text-sm text-gray-500 text-center">
    Already registered?{" "}
    <Link to="/login" className="text-blue-600 font-medium hover:underline">
      Login here
    </Link>
  </p>
</div>
  );
};

export default Register;
