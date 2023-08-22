"use client";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";

const UploaderTwo = () => {
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
      {!file && (
        <div className="h-[500px] w-[500px] bg-[#6060B9] flex flex-col items-center justify-center pt-5">
          <div className="w-[460px] h-[480px] rounded-2xl border-2 border-dashed border-white text-white flex flex-col items-center justify-center mb-5">
            <i className="fa-solid fa-cloud-arrow-up text-5xl p-1"></i>
            <p className="font-medium text-xl leading-8 capitalize mt-3">
              Drag & drop to upload file
            </p>
            <p className="font-medium text-xl leading-8 capitalize">
              on your computer
            </p>

            <div className="relative px-10 py-2 bg-white rounded-lg text-[#6060B9] mt-5">
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
              <p>Upload</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex flex-wrap flex-row justify-center items-center gap-5  ">
        {file && (
          <>
            {file.map((item: File, i: number) => {
              return (
                <div key={i} className="w-60 h-80 rounded bg-white relative  ">
                  <Image
                    src={URL.createObjectURL(item)}
                    alt=""
                    fill
                    className="object-contain z-10 "
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newFileArr = [...file];
                      newFileArr.splice(i, 1);
                      setFile(newFileArr);
                    }}
                    className="absolute z-20 px-2 py-1 rounded-md bg-[#FE0A00] text-white top-2 left-2 capitalize "
                  >
                    {" "}
                    remove{" "}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditFileIndex(i);
                      editInputRef.current?.click();
                    }}
                    className="absolute z-20 px-2 py-1 rounded-md bg-green-200 text-black top-2 right-2 capitalize "
                  >
                    {" "}
                    edit{" "}
                  </button>
                </div>
              );
            })}
            <div className="w-60 h-80 flex flex-col items-center justify-center border border-blue-600 rounded bg-white relative ">
              <input
                type="file"
                multiple
                className="opacity-0 absolute w-full h-full z-10"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const files = e.target.files;
                  if (files) {
                    const fileArr = Object.values(files);
                    // console.log(' Home ~ fileArr:', fileArr);
                    if (file.length <= 3) {
                      setFile((prevValue) =>
                        prevValue ? [...prevValue, ...fileArr] : [...fileArr]
                      );
                    }
                  }
                }}
              />
              <i className="fa-solid fa-cloud-arrow-up text-5xl p-1 text-[#7F9AFB]"></i>
              <h1 className="text-xl leading-8 font-bold">Upload More</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploaderTwo;
