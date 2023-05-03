import React, { useContext, useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle,FaGithub } from "react-icons/fa";
import { Link ,useLocation , useNavigate} from "react-router-dom";
import { ChefContext } from "../../Providers/AuthProviders";


const Login = () => {
  const { LoginUser ,LogInWithGoogle,LoginWithGithub,toggle} = useContext(ChefContext);
  const [show, setShow] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  const signInWithGoogle = ()=>{
      LogInWithGoogle()
      .then(result=> console.log(result.user))
      .catch(error => console.log(error.message))

}
const signInWithGithub = ()=>{
        LoginWithGithub()
        .then(result => console.log(result.user))
        .catch(error => console.log(error.message))
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const From = e.current
    const email = emailRef.current.value;
    const password = passwordRef.current.value;



    LoginUser(email, password)
      .then((result) => {
        console.log(result.user)
        navigate(from,{replace:true})
        From.reset()
    })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 -z-10">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-medium mb-6 text-center">
          Sign In to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Enter your email address"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div className={!toggle ? 'relative' : 'hidden'}>
              <input
                type={show ? "text" : "password"}
                id="password"
                className="w-full  px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Enter your password"
                ref={passwordRef}
                required
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute right-2 top-3 text-xl text-red-500 cursor-pointer"
              >
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="remember" className="text-gray-700 font-medium">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
                name="remember"
              />
              Remember Me
            </label>
            <a
              href="#"
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg mt-8 hover:bg-red-600"
          >
         Sign In
          </button>


            <div>

            <button
                onClick={signInWithGoogle}
            className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center space-x-2 mt-8 hover:bg-white duration-200 hover:text-blue-500 hover:border hover:border-blue-500"
          >

            <FaGoogle className="mt-[0.20rem]"/>
            <h2>
            Sign in with Google
            </h2>

          </button>
            <button
                onClick={signInWithGithub}
            className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center space-x-2 mt-8 hover:bg-white duration-200 hover:text-black hover:border hover:border-black"
          >

            <FaGoogle className="mt-[0.20rem]"/>
            <h2>
            Sign in with Github
            </h2>

          </button>
            </div>

        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600 mr-2">Don't have an account?</span>
          <Link
            to="/user/register"
            className="text-red-400 hover:text-red-500 font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
