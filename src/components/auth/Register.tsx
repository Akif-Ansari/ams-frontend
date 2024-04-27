import { useState } from "react";
import Login from "./Login";
import Otp from "./Otp";
const Register = () => {
  const [isAlreadyMember, setIsAlreadyMember] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [phone, setPhone] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [error, setError] = useState("");
  const [otpPageActive, setOtpPage] = useState<boolean>(false);
  const handleSubmit = async (e) => {
  };
  return (
    <>
      <div
        className={`login-parent relative h-[600px] w-[460px] ${
          isAlreadyMember && "hidden"
        }  `}
      >
        <div
          className="login z-50 flex flex-col items-center justify-start absolute h-full 
        w-full rounded-3xl "
        >
          <h1 className="text-[#03837b] text-3xl font-medium w-full text-center mt-12">
            Register
          </h1>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border
           border-gray-600 w-[70%]
            px-4 h-10 rounded-full mt-6
            focus:border-[#03837b]
             focus:border-2
             placeholder:text-gray-600"
          />
          <input
            type="text"
            placeholder="student name"
            onChange={(e) => setName(e.target.value)}
            className="outline-none
          focus:border-[#03837b]
          focus:border-2
           border border-gray-600 w-[70%] px-4 h-10 rounded-full mt-5  placeholder:text-gray-600"
          />
          <div className="flex justify-between w-[70%] mt-4">
            <select
              name=""
              id=""
              className="border-gray-600 border rounded-full px-6 
            focus:border-[#03837b]
            focus:border-2
            h-10 "
            >
              <option value="">Course</option>
              <option value="mca">MCA</option>
              <option value="bca">BCA</option>
            </select>
            <select
              name=""
              id=""
              className="border-gray-600 border 
            focus:border-[#03837b]
            focus:border-2
            rounded-full px-6 h-10"
              style={{ backgroundPositionX: "50px" }}
            >
              <option value="">Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <select
              name=""
              id=""
              className="border-gray-600 border
            focus:border-[#03837b]
            focus:border-2
            rounded-full px-6  h-10"
              style={{ backgroundPositionX: "86px" }}
            >
              <option value="">Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="phone no."
            onChange={(e) => setPhone(e.target.value)}
            className="outline-none
          focus:border-[#03837b]
          focus:border-2
          border border-gray-600 w-[70%] px-4 h-10 rounded-full mt-5  placeholder:text-gray-600"
          />
          <input
            type="text"
            placeholder="roll no."
            onChange={(e) => setRollNo(e.target.value)}
            className="outline-none border
          focus:border-[#03837b]
          focus:border-2
          border-gray-600 w-[70%] px-4 h-10 rounded-full mt-5  placeholder:text-gray-600"
          />
          <input
            type="text"
            placeholder="enrollment no."
            onChange={(e) => setEnrollmentNo(e.target.value)}
            className="outline-none border
          focus:border-[#03837b]
          focus:border-2
          border-gray-600 w-[70%] px-4 h-10 rounded-full mt-5  placeholder:text-gray-600"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#03837b] px-20 text-primary font-medium text-base rounded-full py-2 mt-6"
          >
            Confirm
          </button>
          <a
            href="#"
            onClick={() => {
              setIsAlreadyMember(true);
            }}
            className="text-[#00c0bd] mt-4 text-base"
          >
            Already a member?
          </a>
        </div>
      </div>
      {isAlreadyMember && <Login />}
      {otpPageActive && <Otp />}
    </>
  );
};

export default Register;
