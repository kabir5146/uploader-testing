"use client";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";

const UploaderThree = () => {
  const [file, setFile] = useState<File[] | "">();
  console.log("🚀 ~ file: page.tsx:8 ~ Home ~ file:", file);
  const [editFileIndex, setEditFileIndex] = useState<number>(0);
  const editInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center justify-center py-40 gap-10">
      <input
        ref={editInputRef}
        type="file"
        name=""
        className="opacity-0 absolute top-0 right-0 -z-10 "
        id=""
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files && file) {
            const prevFileArr = [...file];
            const fileArr = Object.values(files);
            // console.log(' Home ~ fileArr:', fileArr);
            prevFileArr[editFileIndex] = fileArr[0];
            setFile(prevFileArr);
          }
        }}
      />
      <div className=" w-[500px] bg-white shadow-xl flex flex-col items-center justify-center py-8 rounded-md">
        {!file && (
          <>
            <h2 className="text-[#7F9AFB] text-2xl font-medium mb-5">
              File Uploader JavaScript
            </h2>
            <div className="w-[420px] h-[200px] rounded-md border-2 border-dashed border-[#7F9AFB] text-[#A0B2E0] flex flex-col items-center justify-center relative">
              <i className="fa-solid fa-cloud-arrow-up text-5xl p-1 text-[#7F9AFB]"></i>
              <p className="font-medium text-xl leading-8 capitalize mt-3">
                browse file to upload
              </p>
              <input
                type="file"
                multiple
                name=""
                id=""
                className="h-full w-full opacity-0 absolute"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const files = e.target.files;
                  if (files) {
                    const fileArr = Object.values(files);
                    // console.log(' Home ~ fileArr:', fileArr);
                    if (fileArr.length <= 3) {
                      setFile(fileArr);
                    } else {
                      let tempArr = [];
                      for (let index = 0; index <= 3; index++) {
                        tempArr.push(fileArr[index]);
                      }
                      setFile(tempArr);
                    }
                  }
                }}
              />
            </div>
          </>
        )}
        <div className="w-full flex flex-col justify-center items-center gap-5 mt-8">
          {file && (
            <>
              {" "}
              <div className=" flex flex-col items-center justify-center rounded bg-white relative  ">
                <h2 className="text-[#7F9AFB] text-2xl font-medium mb-5">
                  File Uploader JavaScript
                </h2>
                <div className="w-[420px] h-[200px] rounded-md border-2 border-dashed border-[#7F9AFB] text-[#A0B2E0] flex flex-col items-center justify-center relative">
                  <i className="fa-solid fa-cloud-arrow-up text-5xl p-1 text-[#7F9AFB]"></i>
                  <p className="font-medium text-xl leading-8 capitalize mt-3">
                    browse file to upload
                  </p>
                  <input
                    type="file"
                    multiple
                    name=""
                    id=""
                    className="h-full w-full opacity-0 absolute"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const files = e.target.files;
                      if (files) {
                        const fileArr = Object.values(files);
                        // console.log(' Home ~ fileArr:', fileArr);
                        if (file.length <= 3) {
                          setFile((prevValue) =>
                            prevValue
                              ? [...prevValue, ...fileArr]
                              : [...fileArr]
                          );
                        }
                      }
                    }}
                  />
                </div>
              </div>
              {file.map((item: File, i: number) => {
                const progressPercentage = 50;

                return (
                  <div
                    key={i}
                    className="w-[420px] h-16 flex flex-row items-center justify-between rounded bg-[#EDF2FF] relative px-5"
                  >
                    <i className="fa-regular fa-file-lines text-[#7F9AFB] text-3xl"></i>
                    <div className="flex flex-col ml-3 w-[90%]">
                      <div className="w-full flex flex-row items-center justify-between text-[#000000] text-xs leading-4">
                        <p className="">{item.name}</p>
                        <p className="">{progressPercentage}%</p>
                      </div>
                      <div className="w-full h-2 bg-white mt-1 rounded-md">
                        <div
                          className={`h-full w-1/2 bg-[#7F9AFB] rounded-md ${progressPercentage}`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploaderThree;
