import { useState } from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );
      // console.log(response);
      navigate('/adminPanel')

      if(response.data && response.data.success) {
        alert("Successfully Login")
        setError(null)
      }
    } catch (error) {
      if(error.response && !error.response.data.success){
        alert(error.response.data.error);
        setError(error.response.data.error)
      } else{
        setError('Server Error')
      }
      console.log(error);
    }
  };
  return (
    <div id="login">
      <div className="h-screen flex">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage: "url(../../src/assets/images/loginn.png)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            {error && <p className="text-red-500">{error}</p>}
            <form
              className="bg-white rounded-md shadow-2xl p-5"
              onSubmit={handleSubmit}
            >
              <h1 className="text-gray-800 font-bold text-2xl mb-8">
                Login into your account!
              </h1>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none text-black"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillrule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    cliprule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none text-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-emerald-600 mt-5 py-2 rounded-2xl hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Login
              </button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Forgot Password ?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
