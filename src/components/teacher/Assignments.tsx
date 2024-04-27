import React from "react";
import { IoTriangle } from "react-icons/io5";
import { MdBookmark } from "react-icons/md";
const givenAssignments = [
  {
    title: "Compiler Design",
    course: "MCA",
    year: "2nd",
    sem: "IVth",
    dos: "15/08/04",
    date: "06/06/04",
  },
  {
    title: "Theory of Automata",
    course: "MCA",
    year: "2nd",
    sem: "IVth",
    dos: "15/08/04",
    date: "06/06/04",
  },
  {
    title: "Computer Orgzanisation & Architecture",
    course: "BCA",
    year: "2nd",
    sem: "IIIrd",
    dos: "25/08/04",
    date: "06/06/04",
  },
  {
    title: "Digital Logic",
    course: "BCA",
    year: "2nd",
    sem: "IVth",
    dos: "23/08/04",
    date: "06/06/04",
  },
  {
    title: "Digital Logic",
    course: "BCA",
    year: "2nd",
    sem: "IVth",
    dos: "23/08/04",
    date: "06/06/04",
  },
  {
    title: "Digital Logic",
    course: "BCA",
    year: "2nd",
    sem: "IVth",
    dos: "23/08/04",
    date: "06/06/04",
  },
  {
    title: "Digital Logic",
    course: "BCA",
    year: "2nd",
    sem: "IVth",
    dos: "23/08/04",
    date: "06/06/04",
  },
];
const totalAssignmentsGiven = [
  { course: "BCA", count: 2, dept: "Department of CS & IT" },
  { course: "MCA", count: 3, dept: "Department of CS & IT" },
];
const Assignments = () => {
  return (
    <div
      className="min-w-[1400px] absolute top-0 pt-24 left-[440px] 
    h-full flex flex-col items-center overflow-hidden"
    >
      <div className="w-[88%] h-full mt-16 flex flex-col gap-y-3">
        <h1 className="text-secondary text-2xl font-bold ml-5">
          My Assignments
        </h1>
        <div
          className="w-full h-96 flex flex-col border border-primary 
        rounded-2xl pt-5 px-10"
        >
          <div className="self-end flex flex-row gap-x-5">
            <input
              type="search"
              placeholder="search"
              className="outline-none  rounded-full text-textPr bg-[#eee] px-8 py-2 
              focus:border  border-secondar"
            />
            <div className="flex gap-x-2 items-center">
              <h1>Filter</h1>
              <IoTriangle className="rotate-180 text-xs" />
            </div>
          </div>
          <div
            className="flex flex-row text-base justify-between items-center mt-5
           border-b border-primary"
          >
            <p className="w-[5%]">S no.</p>
            <p className="w-[24%]">Title</p>
            <p className="w-[8%]">Course</p>
            <p className="w-[10%]">Year</p>
            <p className="w-[8%]">Semester</p>
            <p className="w-[12%]">Date of Submission</p>
            <p className="w-[8%]">Date</p>
            <p className="w-[16%] text-center">Update Date of Submission</p>
          </div>
          <div
            className="flex flex-col justify-start h-56 gap-y-2 mt-2 text-base
               overflow-y-auto py-3 scrollbar-thin scrollbar-track-transparent
                scrollbar-thumb-rounded-full scrollbar-thumb-[#bbb]
               text-[#000]"
          >
            {givenAssignments.map((assignment, index) => {
              return (
                <div className="flex flex-row text-base justify-between">
                  <p className="w-[5%] text-left">{index + 1}</p>
                  <p className="w-[24%] text-left">{assignment.title}</p>
                  <p className="w-[8%%] text-left">{assignment.course}</p>
                  <p className="w-[10%] text-left">{assignment.year}</p>
                  <p className="w-[8%] text-left">{assignment.sem}</p>
                  <p className="w-[12%] text-left">{assignment.dos}</p>
                  <p className="w-[8%] text-left">{assignment.date}</p>
                  <button
                    className="bg-primary w-[16%] px-7 h-9 py-1 text-primary
                   text-base rounded-full outline-none border-none"
                  >
                    Update
                  </button>
                </div>
              );
            })}
          </div>
          {/* Upload assignments */}
        </div>
        <div className="flex flex-row justify-between gap-x-4">
          <div className="flex flex-col w-full ">
            <h1 className="text-2xl ml-5 text-secondary">Upload Assignment</h1>
            <div
              className="h-64  w-full flex flex-col gap-y-2 rounded-2xl p-8 mt-2"
              style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
            >
              <input
                type="text"
                placeholder="Title of Assignment"
                className="w-full rounded-lg bg-transparent outline-none border
                 border-primary focus:border-secondary px-5 py-2 text-[14px]"
              />
              <div className="flex flex-row justify-between w-full gap-x-3">
                <input
                  type="text"
                  placeholder="Course"
                  className="w-full rounded-lg bg-transparent outline-none border
                   border-primary focus:border-secondary px-5 py-2 text-[14px]"
                />
                <input
                  type="text"
                  placeholder="Semester"
                  className="w-full rounded-lg bg-transparent outline-none border
                   border-primary focus:border-secondary px-5 py-2 text-[14px]"
                />
                <input
                  type="text"
                  placeholder="Year"
                  className="w-full rounded-lg bg-transparent outline-none border
                   border-primary focus:border-secondary px-5 py-2 text-[14px]"
                />
              </div>
              <div className="flex flex-row  justify-between gap-x-3 w-full">
                <input
                  type="date"
                  name=""
                  placeholder="Date of Submission"
                  id=""
                  className="w-full rounded-lg bg-transparent outline-none border
                   border-primary focus:border-secondary px-5 py-2 text-[14px]"
                />
                <button
                  className="px-16 text-nowrap rounded-full text-base py-1
                 outline-none bg-primary border-none text-primary"
                >
                  Upload PDF
                </button>
              </div>
              <button
                className="text-nowrap w-full text-base rounded-full py-2 
              outline-none bg-primary border-none text-primary"
              >
                Confirm
              </button>
            </div>
          </div>
          <div className="w-full flex flex-row gap-x-16 px-10 justify-between mt-10">
            {totalAssignmentsGiven.map((assignment) => {
              return (
                <div
                  className="h-64 w-full rounded-2xl p-7 flex flex-col"
                  style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
                >
                  <MdBookmark className="text-4xl text-textSc" />
                  <h1
                    className="text-textSc text-9xl font-bold 
                        self-center"
                  >
                    {assignment.count}
                  </h1>
                  <p className="self-start">{assignment.course}</p>
                  <p
                    className="text-xs text-secondary
                         self-start"
                  >
                    {assignment.dept}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
