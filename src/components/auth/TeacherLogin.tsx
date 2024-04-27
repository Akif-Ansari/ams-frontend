import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Password from "./Password";

const LoginTeacher = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [err, setError] = useState<string>("");
  const [activeForgotPass, setActiveForgotPass] = useState<boolean>(false);
  const handleLogin = async (e: any) => {
    // try {
    //   const response = await fetch("localhost:27017/loginteach", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, pass }),
    //   });

    //   if (response.ok) {
    //     navigate("/teachpanel");
    //   } else {
    //     setError("Invalid username or password");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   setError("An error occurred, please try again later");
    // }
        navigate("/teachpanel");
  };
  return (
    <>
      <div
        className={`login-parent relative h-[480px] w-[470px] ${
          activeForgotPass && "hidden"
        }`}
      >
        <div className="login z-50 flex flex-col items-center justify-start
         absolute h-full w-full rounded-3xl ">
          <h1 className="text-[#03837b] text-3xl font-medium w-full text-center mt-12">
            Teacher Login
          </h1>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="outline-none border
          focus:border-[#03837b]
          focus:border-2
          border-gray-400 w-[70%] px-4 h-10 rounded-full mt-8"
          />
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
            className="outline-none border
          focus:border-[#03837b]
          focus:border-2
          border-gray-400 w-[70%] px-4 h-10 rounded-full mt-6"
          />
          <button
            onClick={handleLogin}
            className="bg-[#03837b] px-20 text-primary rounded-full py-2 mt-6"
          >
            Confirm
          </button>
          <a
            href="#"
            onClick={() => setActiveForgotPass(true)}
            className="text-gray-500 mt-4 text-base"
          >
            Forgot password
          </a>
        </div>
      </div>
      {activeForgotPass && <Password />}
    </>
  );
};

export default LoginTeacher;
