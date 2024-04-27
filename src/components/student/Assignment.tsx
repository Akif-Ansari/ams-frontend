import React, { useRef, useState } from "react";
import { IoTriangle } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";
import { TbDotsVertical } from "react-icons/tb";
const AssignmentsInfo = [
  {
    assignmentName: "Compiler Design",
    givenBy: "Dr. Raza Abbas Haidri",
    lastDate: "15/02/2024",
  },
  {
    assignmentName: "Software Engineering",
    givenBy: "Dr. Mazhar Khaliq",
    lastDate: "01/03/2024",
  },
  {
    assignmentName: "Python Programming",
    givenBy: "Dr. Raza Abbas Haidri",
    lastDate: "15/02/2024",
  },
  {
    assignmentName: "Artificial Intelligence",
    givenBy: "Dr. Waliullah",
    lastDate: "18/02/2024",
  },
];
const Assignment = () => {
  const imageRef = useRef(null);
  const downloadAssignment = useRef(null);
  const handleUploadImage = () => {
    imageRef.current.click();
  };
  const handleChangeImage = (event: any) => {
    const imageFile = event.target.files[0];
    console.log(imageFile);
  };
  const handleDownloadAssignment = () => {
    downloadAssignment.current.click();
  };
  const handleDownload = (data: any) => {
    console.log(data);
  };

  return (
    <div
      className="min-w-[1400px] absolute top-0 pt-24 left-[440px] 
    h-full flex flex-col items-center "
    >
      {/* Top */}
      <div className="flex flex-row gap-x-20 justify-end w-full mr-64">
        {/* Upload Button */}
        <div className="flex gap-x-2 items-center">
          <p className="text-secondary text-base">Upload Assignment</p>
          <IoMdCloudUpload className="text-4xl text-textPr" />
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
          <input
            type="file"
            className="hidden"
            onClick={handleChangeImage}
            ref={imageRef}
          />
          <IoTriangle
            onClick={handleUploadImage}
            className="text-xl rotate-180 absolute top-1/2 transform translate-y-[-50%] 
            right-4 cursor-pointer"
          />
        </div>
      </div>
      {/* Assignments */}
      <div
        className="w-[94%] h-[640px] mt-10 grid grid-cols-2 gap-y-6 
     overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary 
     scrollbar-thumb-rounded-full
     "
      >
        {AssignmentsInfo.map((data) => {
          return (
            <div
              className="relative h-[500px] w-[620px] rounded-xl bg-[#f6f6f6]"
              ref={downloadAssignment}
              onClick={() => handleDownload(data)}
            >
              {/* Download Button */}
              <TbDotsVertical
                onClick={handleDownloadAssignment}
                className="absolute top-8 right-4 text-4xl text-primary cursor-pointer
               active:text-textPr"
              />
              <img
                src="/assets/assignment.jpg"
                alt="Assignment"
                className="h-[360px]
               w-full rounded-tl-xl rounded-tr-xl"
                style={{ objectFit: "cover" }}
              />
              <div className="px-6 pt-5 pb-3">
                <h1 className="text-textPr font-bold text-xl">
                  {data.assignmentName}
                </h1>
                <p className="text-secondary font-light">{data.givenBy}</p>
              </div>
              <div className="flex flex-row justify-between px-5">
                <h1 className="text-base text-[#000] font-semibold">
                  Submission Data
                </h1>
                <p className="text-textPr font-semibold">{data.lastDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assignment;
