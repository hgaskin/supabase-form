/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Distrokid = ({ register }) => {
  return (
    <section className="block">
      <h2 className="font-semibold text-3xl my-4">Distrokid Upload</h2>
      <div className="sm:col-span-6">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-gray-700"
        >
          Distrokid Upload
        </label>
        <p>
          <span>
            To export your royalty data from Distrokid, log in to your account
            and follow these steps:
          </span>
        </p>
        <p>
          <span>1) Click "Bank"</span>
        </p>
        <p>
          <span>
            2) Click "See Excruciating Detail" (on the right side of the page)
          </span>
        </p>
        <p>
          <span>
            3) Click the Download button (below navigation bar, at the right
            side of page)
          </span>
        </p>

        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="fileUpload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <input
                  {...register("file.distrokidUpload", {})}
                  type="file"
                  id="distrokidUpload"
                  multiple={true}
                  // onChange={(e) => console.log(e.target.files[0])}
                  // className="sr-only"
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distrokid;
