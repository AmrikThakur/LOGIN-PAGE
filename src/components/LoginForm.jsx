import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  // Form OnSubmit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn =
      username === "test@luxpmsoft.com" && password === "test1234!";
    onLogin(isLoggedIn);
  };

  // Password Validation Handler
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(newPassword);
    setValid(isValid);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center items-center">
          <img className="w-[119.386px] h-[97.851px]" src="Group.png" />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#2148C0] placeholder-white text-[#FFFFFF]"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={handlePasswordChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300  rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#2148C0] placeholder-white text-[#FFFFFF]"
                placeholder="Password"
              />
            </div>
          </div>
          {!valid && (
            <p className="erro text-xs text-[#FFFFFF]">
              Password must contain at least one letter, one number, one special
              character, and be at least 8 characters long.
            </p>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-[#FFFFFF] text-blue-600"
            >
              LOGIN
            </button>
          </div>
          <div className="flex justify-end">
            <p className="text-sm text-[#FFFFFF]">Forgot password?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
