import React, { useState } from "react";

const Profile = () => {
  return (
    <div
      className="min-w-[1400px] absolute top-0 pt-24 left-[440px] 
    h-full flex flex-col items-center overflow-hidden"
    >
      {/* Profile info */}
      <div className="w-[88%] mt-20 h-36 flex flex-row justify-between">
        <div
          className="flex flex-row items-center justify-start  gap-x-5 pl-16 w-4/5 h-full rounded-lg"
          style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
        >
          <img
            className="h-20 w-20 rounded-full"
            src="https://media.licdn.com/dms/image/D4D03AQGJq09mXjVgNA/profile-displayphoto-shrink_800_800/0/1680603332449?e=2147483647&v=beta&t=62FRyjztwoLLaZo6b-I21GZThVn7mAmAG_RdlnE3ZUg"
            alt=""
          />
          <div className="flex flex-col">
            {/* Student Name */}
            <h1 className="text-3xl font-medium">Raza Abbas Haidri</h1>
            {/* Departement Name */}
            <p className="text-secondary text-[14px]">
              Computer Science & Information Technology
            </p>
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col items-center justify-center gap-y-2">
          <button
            className="text-primary  text-base w-full font-semibold 
          outline-none bg-secondary rounded-full px-8 py-2"
          >
            Add Teachers
          </button>
          <button
            className="text-primary  text-base w-full font-semibold
           outline-none bg-secondary rounded-full px-8 py-2"
          >
            Add Students
          </button>
          <button
            className="text-primary  text-base w-full font-semibold
           outline-none bg-secondary rounded-full px-8 py-2"
          >
            Change Password
          </button>
        </div>
      </div>
      <div className="w-[88%] h-[560px] mt-5  flex flex-row gap-x-8  justify-between">
        {/* Add single student */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-secondary font-bold text-xl ml-10">
            Add Student
          </h1>
          <div
            className="flex flex-col w-full items-start gap-y-2 px-10 py-8 mt-4 rounded-2xl"
            style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
          >
            <input
              type="text"
              placeholder="Student name"
              className="bg-transparent w-full outline-none
               focus:border-secondary border border-primary rounded-xl px-6 py-2"
            />
            <input
              type="text"
              placeholder="Father's name"
              className="bg-transparent w-full outline-none
               focus:border-secondary border border-primary rounded-xl px-6 py-2"
            />
            <input
              type="text"
              placeholder="Enrollment no."
              className="bg-transparent w-full outline-non
               focus:border-secondary border border-primary rounded-xl px-6 py-2"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent w-full outline-none focus:border-secondary border border-primary rounded-xl px-6 py-2"
            />
            <input
              type="text"
              placeholder="Roll no."
              className="bg-transparent w-full outline-none
               focus:border-secondary border border-primary rounded-xl px-6 py-2"
            />
            <div className="flex flex-row gap-x-4 justify-between">
              <input
                type="text"
                placeholder="Semester"
                className="bg-transparent w-full outline-none
                 focus:border-secondary border border-primary rounded-xl px-6 py-2"
              />
              <input
                type="text"
                placeholder="Year"
                className="bg-transparent w-full outline-none
                 focus:border-secondary border border-primary rounded-xl px-6 py-2"
              />
              <input
                type="text"
                placeholder="Course"
                className="bg-transparent w-full outline-none
                 focus:border-secondary border border-primary rounded-xl px-6 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="bg-transparent w-full outline-none
               focus:border-secondary border border-primary rounded-xl px-6 py-2"
            />
            <div className="flex flex-row gap-x-4 w-full">
              <input
                type="date"
                placeholder="DOB."
                className="bg-transparent w-2/5 outline-none
                 focus:border-secondary border border-primary rounded-xl px-6 py-2"
              />
              <input
                type="text"
                placeholder="Mobile no."
                className="bg-transparent w-full outline-none
                 focus:border-secondary border border-primary rounded-xl px-6 py-2"
              />
            </div>
            <button
              className="self-end bg-primary px-16
             py-2 rounded-full text-primary font-bold text-base"
            >
              Add
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <h1 className="text-secondary font-bold text-xl">Upload XL file</h1>
          <div
            className="flex flex-row justify-between h-32 items-center px-8 rounded-2xl"
            style={{ boxShadow: "0 0 30px rgba(0,0,0,0.12)" }}
          >
            <button className="text-2xl font-bold text-textPr">Upload</button>
          </div>
          <button
            className="px-8 py-2 bg-primary self-end 
          outline-none border-none w-36 text-primary font-bold rounded-full"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
