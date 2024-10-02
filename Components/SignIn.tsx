"use client";
import { useState } from "react";
import axios from "axios";
import ErrorModal from "./Modal";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // Store the response message
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send a POST request to the API using Axios
      const response = await axios.post("https://zoton.de/api.php", {
        page: "login", // Required parameter for login
        username: String(username),
        password: String(password),
      });

      setResponseMessage(response.data.msg);
      if (String(response.data.msg) != "OK") {
        setShowModal(true);
      }

      console.log("Login successful:", response);
    } catch (error) {
      // Handle error
      console.error("Login failed:", error);
      setResponseMessage("Login failed. Please check your credentials.");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white bg-primary-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Modal shows only if there's an error */}
      {showModal && (
        <ErrorModal message={responseMessage} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Signin;
