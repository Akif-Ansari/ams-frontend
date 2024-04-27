import { useState } from "react";
import "./style.css";
import Otp from "./Otp";
const Password = () => {
  const [isOtpActive, setIsOtpActive] = useState<boolean>(false);
  const [pass, setPass] = useState<string>("");
  const [cpass, setCPass] = useState<string>("");
  const handlePassword = () => {
    if (pass === cpass) {
      setIsOtpActive(true);
    }
  };
  return (
    <>
      <div
        className={`login-parent relative h-[300px] w-[500px] ${
          isOtpActive && "hidden"
        }`}
      >
        <div className="login z-50 flex flex-col items-center justify-start 
        absolute h-full w-full rounded-3xl ">
          <h1 className="text-[#03837b] text-base font-medium w-full text-center mt-12">
            Make sure your password
          </h1>
          <input
            type="text"
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
            className="outline-none border
          focus:border-[#03837b]
          focus:border-2
          border-gray-400 w-[70%] px-4 h-10 rounded-full mt-4"
          />
          <input
            type="text"
            onChange={(e) => setCPass(e.target.value)}
            placeholder="confirm password"
            className="outline-none border
          focus:border-[#03837b]
          focus:border-2
          border-gray-400 w-[70%] px-4 h-10 rounded-full mt-4"
          />
          <button
            onClick={handlePassword}
            className="bg-[#03837b] px-20 text-primary 
            rounded-full py-2 mt-4"
          >
            Confirm
          </button>
        </div>
      </div>
      {isOtpActive && <Otp />}
    </>
  );
};

export default Password;
