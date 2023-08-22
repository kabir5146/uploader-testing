"use client";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";

const UploaderFour = () => {
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
        <div className="h-40 w-40 flex flex-col items-center justify-center bg-white border border-blue-600 relative">
          <input
            type="file"
            multiple
            name=""
            id=""
            className="h-full w-full opacity-0 absolute cursor-pointer"
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
          <i className="fa-solid fa-cloud-arrow-up text-5xl p-1 text-[#7F9AFB]"></i>
          <p className="px-3 text-center text-blue-500 mt-2">
            Browse File To Upload
          </p>
        </div>
      )}
      <div className="w-full flex flex-wrap flex-row justify-center items-center gap-5  ">
        {file && (
          <>
            {file.map((item: File, i: number) => {
              return (
                <div
                  key={i}
                  className="h-40 w-40 flex flex-col items-center justify-center bg-white border border-gray-300 relative"
                >
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
                    className="absolute z-20 left-2 top-2 text-[#FE0A00]"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditFileIndex(i);
                      editInputRef.current?.click();
                    }}
                    className="absolute z-20 right-2 top-2 text-gray-500"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </div>
              );
            })}
            <div className="h-40 w-40 flex flex-col items-center justify-center bg-white border border-blue-600 relative">
              <input
                type="file"
                multiple
                className="opacity-0 absolute w-full h-full z-10 cursor-pointer"
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
              <p className="px-3 text-center text-blue-500 mt-2">
                Browse File To Upload
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploaderFour;
