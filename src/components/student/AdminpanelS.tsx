import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaFileAlt } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import Profile from "./Profile";
import Assignment from "./Assignment";
import Upload from "./Upload";
import Project from "./Project";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
const AdminpanelS = () => {
  const [active, setActive] = useState<string>("Profile");
  const TABS: any = [
    {
      value: "Profile",
      icon: <CiUser className=" text-[rgba(255,255,255,0.7]" />,
      component: <Profile />,
    },
    {
      value: "Assignment",
      icon: <FaFileAlt className=" text-[rgba(255,255,255,0.7]" />,
      component: <Assignment />,
    },
    {
      value: "Upload Assignment",
      icon: <IoMdCloudUpload className=" text-[rgba(255,255,255,0.7]" />,
      component: <Upload />,
    },
    {
      value: "Message",
      icon: <FaRegMessage className=" text-[rgba(255,255,255,0.7]" />,
      component: <Message />,
    },
    {
      value: "Project",
      icon: <GoProjectSymlink className=" text-[rgba(255,255,255,0.7]" />,
      component: <Project />,
    },
  ];
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen relative w-full mx-auto">
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
                    ? "bg-primary text-primary"
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
          className="absolute bottom-5 flex flex-row items-center text-textSc"
        >
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
export default AdminpanelS;
