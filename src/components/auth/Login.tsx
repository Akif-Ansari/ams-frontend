import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./style.css";
import Password from "./Password";
import Register from "./Register";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [activeRegister, setActiveRegister] = useState<boolean>(false);
  const [activeForgotPass, setActiveForgotPass] = useState<boolean>(false);
  const handleLogin = async (e: any) => {
    e.preventDefault();
      try{
        const response = await axios.post(
          "http://localhost:3500/login",
          { email: email, password: pass },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        if(response.data.token){
          const token = response.data.token;
          localStorage.setItem('token',token);
          console.log("login successfull");
          navigate('/stdpanel');
        }else{
          console.log("token not found in your response");
        }
      }catch(err){
         console.log(err);
      }
  };

  return (
    <>
      <div
        className={`login-parent relative h-[480px] w-[470px] ${
          activeForgotPass || activeRegister ? "hidden" : "block"
        }`}
      >
        <div
          className="login z-50 flex flex-col items-center justify-start absolute 
        h-full w-full rounded-3xl "
        >
          <h1 className="text-[#03837b] text-3xl font-medium w-full text-center mt-12">
            Student Login
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
          <button
            onClick={() => setActiveRegister(true)}
            className="text-[#00c9bd] text-xl block absolute bottom-8 left-1/2
             transform translate-x-[-50%]"
          >
            Not a member
          </button>
        </div>
      </div>
      {activeForgotPass && <Password />}
      {activeRegister && <Register />}
    </>
  );
};

export default Login;
