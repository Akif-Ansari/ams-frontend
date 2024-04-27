import { useState } from "react";
import "./style.css";
import Login from "./Login";
const otp = () => {
  const [activeLogin, setActiveLogin] = useState<boolean>(false);
  const [opt, setOtp] = useState<number>(0);
  const [err, setError] = useState<string>("");
  const handleConfirm = async (e) => {
    setActiveLogin(true);
    // try {
    //   const response = await fetch("localhost:27017/confirm-otp", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ otp: otp }),
    //   });

    //   if (response.ok) {
    //     setActiveLogin(true);
    //   } else {
    //     const data = await response.json();
    //     setError(data.message || "OTP confirmation failed");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   setError("An error occurred, please try again later");
    // }
  };
  return (
    <>
      <div
        className={`login-parent relative h-[300px] w-[500px] ${
          activeLogin && "hidden"
        }`}
      >
        <div
          className="login z-50 flex flex-col items-center justify-start
         absolute h-full w-full rounded-3xl "
        >
          <h1
            className="text-[#03837b] text-base font-medium w-full
           text-center mt-12"
          >
            Enter OTP received on your email
          </h1>
          <input
            type="text"
            placeholder="Enter OTP"
            className="outline-none border
          focus:border-[#03837b]
          focus:border-2
          border-gray-400 w-[70%] px-4 h-10 rounded-full mt-4"
          />
          <button
            onClick={handleConfirm}
            className="bg-[#03837b] px-20 text-primary rounded-full py-2 mt-4"
          >
            Confirm
          </button>
          <button
            className="text-[#00c9bd] text-xl block absolute
           bottom-8 left-1/2 transform translate-x-[-50%]"
          >
            Resend OTP
          </button>
        </div>
      </div>
      {activeLogin && <Login />}
    </>
  );
};

export default otp;
