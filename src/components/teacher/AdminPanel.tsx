import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaFileAlt } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { IoTriangle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import Profile from "./Profile";
import Assignments from "./Assignments";
import { useNavigate } from "react-router-dom";
const TABS: any = [
  {
    value: "Profile",
    icon: <CiUser className=" text-[rgba(255,255,255,0.7]" />,
    component: <Profile />,
  },
  {
    value: "Assignments",
    icon: <FaFileAlt className=" text-[rgba(255,255,255,0.7]" />,
    component: <Assignments/>,
  },
  {
    value: "Assignment Status",
    icon: <IoMdCloudUpload className=" text-[rgba(255,255,255,0.7]" />,
    component: <></>,
  },
  {
    value: "Messages",
    icon: <FaRegMessage className=" text-[rgba(255,255,255,0.7]" />,
    component: <></>,
  },
  {
    value: "Projects",
    icon: <GoProjectSymlink className=" text-[rgba(255,255,255,0.7]" />,
    component: <></>,
  },
  {
    value: "Download Records",
    icon: <GoProjectSymlink className=" text-[rgba(255,255,255,0.7]" />,
    component: <></>,
  },
];
const AdminPanel = () => {
  const [active, setActive] = useState<string>("Profile");
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  }
  return (
    <div className="min-h-screen relative w-full mx-auto">
      <div className="absolute top-24 right-40 flex flex-row gap-x-20 justify-end w-full">
        <div className="flex flex-row gap-3">
        <IoMdSettings className="text-textSc text-2xl"/>
        <span className="text-secondary text-base">Profile</span>
        </div>
        <div className="relative h-12 flex w-32 flex-row">
          {/* profile picture */}
          <img
            className="h-12 w-12 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQGJq09mXjVgNA/profile-displayphoto-shrink_800_800/0/1680603332449?e=2147483647&v=beta&t=62FRyjztwoLLaZo6b-I21GZThVn7mAmAG_RdlnE3ZUg"
            alt=""
          />
          <span className="text-xs absolute font-medium text-textPr right-4">
            Akif Ansari
          </span>
          {/* Change Profile Pic Button */}
          <input type="file" className="hidden" />
          <IoTriangle className="text-xl rotate-180 absolute top-1/2 transform translate-y-[-50%] right-4 cursor-pointer" />
        </div>
      </div>

      <div
        className="sidebar 
    absolute left-0 h-full
     w-[440px] border-r-4 border-primary flex flex-col items-center justify-start"
      >
        <h1 className="text-4xl font-bold text-black mt-24">Dashboard</h1>
        {/* Tabs */}
        <div className="flex flex-col items-start gap-y-5 mt-8">
          {TABS.map((tab: any, key: any) => {
            return (
              <div
                onClick={() => setActive(tab.value)}
                key={key}
                className={`text-xl w-56 font-medium  ${
                  tab.value === active
                    ? "bg-secondary text-primary"
                    : "text-secondary"
                } flex flex-row justify-start gap-x-5 pl-8 items-center  rounded-full py-2`}
              >
                {tab.icon}
                <button className="text-base">{tab.value}</button>
              </div>
            );
          })}
        </div>
        <div 
        onClick={handleLogout}
        className="absolute bottom-5 flex flex-row items-center text-textSc">
          <IoIosLogOut className="text-3xl" />
          <a href="#" className=" text-base">
            Logout
          </a>
        </div>
      </div>
      {/* Component Rendering Area */}
      {TABS.map(
        (tab: any) =>
          tab.value === active && <div key={tab.value}>{tab.component}</div>
      )}
    </div>
  );
};

export default AdminPanel;
