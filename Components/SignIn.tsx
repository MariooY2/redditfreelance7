"use client"
import { useState } from "react";
import axios from "axios";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState(" ");

  // Handle form submission
  const handleSubmit = async (e:Event) => {
    e.preventDefault();
    try {
      // Send a POST request to the API using Axios
      const response = await axios.post("https://zoton.de/api.php", {
        page: "login", // Required parameter for login
        username: String(username),
        password: String(password),
      });

      // Handle successful login response
      setResponseMessage(response.data.msg);
      console.log("Login successful:", response);
    } catch (error) {
      // Handle error
      console.error("Login failed:", error);
      setResponseMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-0 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update state when input changes
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-0 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update state when input changes
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    {/*
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Remember me
                    </label>*/}
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-green-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white bg-primary-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
              {responseMessage && (
                <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
                  {responseMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
