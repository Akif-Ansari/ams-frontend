import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const dropdownOptions = [
  { teacherName: "Dr. Raza Abbas Haidri", mob: 8080808080 },
  { teacherName: "Dr. Mazhar Khaliq", mob: 8080808080 },
  { teacherName: "Dr. Waliullah", mob: 8080808080 },
  { teacherName: "Dr. Anmol Chand Jain", mob: 8080808080 },
  { teacherName: "Kazmi Sir", mob: 8080808080 },
];

const Message = () => {
  const [isActive, setIsActive] = useState(false);
  const [teacher, setTeacher] = useState("Select your Assignment Teacher");
  const [contact, setContact] = useState(0);
  const [message, setMessage] = useState("");
  return (
    <div
      className="min-w-[1400px] absolute top-0 pt-24 left-[500px] h-full
     flex flex-col items-start overflow-hidden"
    >
      <h1 className="text-[#03837B]  text-2xl font-bold">
        Type your responses about your Assignments
      </h1>
      <div className="relative flex flex-col w-[600px] mt-16">
        {/*drop-down  */}

        <div className="w-full h-12 bg-white z-50 border border-secondary
         rounded-lg flex justify-between items-center px-8">
          <p className="select-none">{teacher}</p>
          <IoMdArrowDropdown
            className={`text-4xl text-textPr cursor-pointer ${
              isActive && "rotate-180"
            }`}
            onClick={() => setIsActive((x) => !x)}
          />
        </div>
        <div className="w-full h-56  mt-4 flex flex-col justify-between">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-44 border border-secondary outline-none px-6
             py-4 resize-none rounded-lg text-textPr "
          ></textarea>
          <button
            onClick={() => {
              /* send message*/
            }}
            className="bg-primary text-primary px-8 py-2 rounded-md
             text-base w-48 self-end"
          >
            Submit
          </button>
        </div>
        <div
          className={`absolute top-16  w-full h-44 border border-secondary
           py-5 px-8 rounded-md ${
            !isActive && "hidden"
          } flex flex-col`}
        >
          {dropdownOptions.map((data) => {
            return (
              <h1
                onClick={() => {
                  setContact(data.mob);
                  setIsActive((x) => !x);
                  setTeacher(data.teacherName);
                }}
                className="text-xl hover:text-[#03837B] cursor-pointer"
              >
                {data.teacherName}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;
