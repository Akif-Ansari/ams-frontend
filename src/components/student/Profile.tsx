import React, { useState, useRef, useEffect } from "react";
import { IoTriangle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const IntToRoman:any = {
  1:'Ist',
  2:'IInd',
  3:'IIIrd',
  4:'IVth'
};

const Profile = () => {
  const [studentDetails, setStudentDetails] = useState<any>([]);
  const [response, setResponse] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token: any = localStorage.getItem("token");
        if (token) {
          const decoded: any = jwtDecode(token);
          const ID: Number = decoded.loginstd.id;
          console.log(ID);
          const res = await axios.get(
            `http://localhost:3500/studentdetails/${ID}`,
            {
              responseType: "json",
            }
          );
          setStudentDetails([
            { name: "Course", value: "MCA" },
            { name: "Semester", value: IntToRoman[res.data.semester] },
            { name: "Year", value: IntToRoman[res.data.year] },
            { name: "Roll no.", value: `225416${res.data.stdId}` },
            { name: "Enrollment no.", value: res.data.enrollmentNo },
            { name: "Mobile no.", value: res.data.mobileNo },
          ]);
          setResponse(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const fileRef = useRef(null);
  const imageRef = useRef(null);
  const [fileName, setFileName] = useState<string>("");
  const [changeProfile, setChangeProfile] = useState<boolean>(false);
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setFileName(file.name);
  };
  const handleFileUpload = () => {
    fileRef.current.click();
  };
  const handleUploadImage = () => {
    imageRef.current.click();
  };
  const handleChangeImage = (event: any) => {
    const imageFile = event.target.files[0];
    console.log(imageFile);
  };
  return (
    <div
      className="min-w-[1400px] absolute top-0 pt-24 left-[440px] h-full 
    flex flex-col items-center overflow-hidden"
    >
      <div className="flex flex-row gap-x-20 justify-end w-full mr-64">
        {/* Edit Button */}
        <button
          onClick={() => setChangeProfile(true)}
          className={`px-6 py-2 rounded-lg bg-primary text-primary 
          text-base ${changeProfile && "hidden"}`}
        >
          Edit
        </button>
        <div className="relative h-12 flex w-32 flex-row">
          {/* profile picture */}
          <img
            className="h-12 w-12 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQGJq09mXjVgNA/profile-displayphoto-shrink_800_800/0/1680603332449?e=2147483647&v=beta&t=62FRyjztwoLLaZo6b-I21GZThVn7mAmAG_RdlnE3ZUg"
            alt=""
          />
          <span className="text-xs absolute font-medium text-textPr right-4">
           {response.name}
          </span>
          {/* Change Profile Pic Button */}
          <input
            type="file"
            className="hidden"
            onClick={handleChangeImage}
            ref={imageRef}
          />
          <IoTriangle
            onClick={handleUploadImage}
            className="text-xl rotate-180 absolute top-1/2 transform
             translate-y-[-50%] right-4 cursor-pointer"
          />
        </div>
      </div>

      {/* Profile info */}
      <div className={`w-[88%] ${changeProfile && "hidden"}`}>
        <div
          className="flex flex-row items-center justify-start 
           gap-x-5 pl-16 w-full h-44 rounded-lg mt-7"
          style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
        >
          <img
            className="h-20 w-20 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQGJq09mXjVgNA/profile-displayphoto-shrink_800_800/0/1680603332449?e=2147483647&v=beta&t=62FRyjztwoLLaZo6b-I21GZThVn7mAmAG_RdlnE3ZUg"
            alt=""
          />
          <div className="flex flex-col">
            {/* Student Name */}
            <h1 className="text-3xl font-medium">{response.name}</h1>
            {/* Departement Name */}
            <p className="text-secondary text-[14px]">
              Computer Science & Information Technology
            </p>
          </div>
        </div>
        <div className="h-full w-full flex flex-col pt-6">
          {/* Assignments */}
          <div className="relative flex flex-row items-end justify-between h-[330px] w-full">
            <h1 className="absolute top-10 left-5 text-2xl font-semibold text-secondary">
              Assignment
            </h1>
            <div
              className="h-[220px] w-[240px] rounded-lg  flex flex-col
               items-start justify-between p-10  cursor-pointer"
              style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
            >
              <FaFileAlt className="text-4xl text-textPr" />
              <h1 className="text-[rgba(0,0,0,0.60)] font-medium text-2xl ">
                Assginment Submitted
              </h1>
            </div>
            <div
              className="h-[220px] w-[240px] rounded-lg flex flex-col 
              items-start justify-between p-10 cursor-pointer"
              style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
            >
              <FaArrowRotateLeft className="text-4xl text-textPr" />
              <h1 className="text-[rgba(0,0,0,0.60)] font-medium text-2xl ">
                Assginment Remaining
              </h1>
            </div>
            <div
              className="h-[220px] w-[240px] rounded-lg flex flex-col 
              items-start justify-between p-10 cursor-pointer"
              style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
            >
              <IoMdCloudUpload className="text-4xl text-textPr" />
              <h1 className="text-[rgba(0,0,0,0.60)] font-medium text-2xl ">
                Total Assginment
              </h1>
            </div>
            {/* Student Details */}
            <div
              className="flex flex-col justify-evenly items-stretch 
              py-7 px-12 w-[374px] h-[325px] bg-primary text-primary rounded-lg"
              style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
            >
              {studentDetails.map((data: any) => {
                return (
                  <div className="flex justify-between  pb-3 border-b">
                    <p>{data.name}</p>
                    <p>{data.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Projects */}
          <div className="w-full h-28 mt-10 flex justify-between">
            <h1 className="text-2xl m-7 font-semibold text-secondary">
              Projects
            </h1>
            <div
              className="w-[85%] rounded-lg flex flex-row justify-between items-center px-10"
              style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
            >
              <div className="flex flex-row gap-x-5">
                <IoMdSettings className="text-textPr text-4xl" />
                <div className="flex flex-col items-start">
                  {/* Project Title */}
                  <h1 className="text-2xl font-semibold text-secondary">
                    Edtech Web Application
                  </h1>
                  <button className="text-seconary text-xs cursor-pointer active:text-textPr">
                    Change Title
                  </button>
                </div>
              </div>
              {/* Upload Button */}
              <div className="relative flex flex-row gap-x-5">
                {/* Project file name */}
                <p className="absolute -bottom-6  right-5 text-base w-96 text-right overflow-hidden">
                  {fileName}
                </p>
                <button
                  onClick={handleFileUpload}
                  className="text-xl font-medium text-textPr"
                >
                  Upload
                </button>
                <input
                  ref={fileRef}
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                />
                <IoMdAddCircle
                  onClick={handleFileUpload}
                  className="text-3xl text-textPr cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Profile Update */}
      <div
        className={`relative w-[88%]  ${changeProfile ? "block" : "hidden"}`}
      >
        <h1 className="text-2xl text-secondary font-semibold mx-8 my-4">
          Update Profile
        </h1>
        <div
          className="flex flex-col gap-y-4 p-16 rounded-lg"
          style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
        >
          {studentDetails.map((data: any) => {
            return (
              <div className="flex flex-row gap-x-8 justify-between">
                <input
                  type="text"
                  placeholder={data.name}
                  className="w-full outline-none
          rounded-lg bg-transparent text-[14px] px-6 py-1 border
           border-primay focus:border-secondary"
                />
                <button
                  className="bg-primary text-[14px]
                 px-16 py-2 text-primary rounded-lg"
                >
                  Update
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setChangeProfile(false)}
          className="absolute right-8 -bottom-16 px-6 py-2 bg-primary 
        rounded-lg text-primary text-base "
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Profile;
