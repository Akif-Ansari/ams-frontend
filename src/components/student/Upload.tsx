import React, { useRef, useState } from "react";
import { IoTriangle } from "react-icons/io5";

const assignment = [
  { assignmentName: "Compiler Design", status: "true" },
  { assignmentName: "Artificial Intelligence", status: "true" },
  { assignmentName: "Machine Learning", status: false },
  { assignmentName: "E-commerce", status: false },
  { assignmentName: "Data Mining and Data Warehousing", status: false },
  { assignmentName: "Theory of Computation", status: false },
];

const Upload = () => {
  const imageRef = useRef(null);
  const assignmentRef = useRef(null);
  const handleUploadImage = () => {
    imageRef.current.click();
  };
  const handleChangeImage = (event: any) => {
    const imageFile = event.target.files[0];
    console.log(imageFile);
  };
  const handleAssignmentChange = (event:any) => {
     const assignmentFile = event.target.files[0];
     console.log(assignmentFile)
  }
  const handleUploadAssignment = () => {
    assignmentRef.current.click();
  }
  return (
    <div className="min-w-[1400px] absolute top-0 pt-24 left-[440px] h-full 
    flex flex-col items-center ">
      {/* Top */}
      <div className="flex flex-row gap-x-20 justify-between w-full px-32">
        {/* Search Field */}
        <input
          type="search"
          placeholder="Search"
          className="bg-[#eee] outline-none border-0 focus:border
           focus:border-secondary placeholder:text-textPr rounded-full
            px-5 py-2 w-64"
        />
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
      {/* Upload Assignment */}
      <div className="w-[80%] h-[640px] flex flex-col gap-y-6 mt-16">
        {assignment.map((data) => {
          return (
            <div className="h-16 px-10 py-2 border border-secondary 
            rounded-xl flex flex-row items-center justify-between ">
              <h1 className="font-medium">{data.assignmentName}</h1>
              {data.status ? (
                <button className="text-primary px-4 py-1 rounded-full
                 text-base bg-secondary">
                  Uploaded
                </button>
              ) : (
                <div>
                  <button 
                  onClick={handleUploadAssignment}
                  className="text-primary px-4 py-1 rounded-full 
                  text-base bg-primary">
                    Upload
                  </button>
                  <input className="hidden" type="file" 
                  ref={assignmentRef} onChange={handleAssignmentChange}/>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Upload;
