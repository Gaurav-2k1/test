import React from "react";

export default function BreadCrumbComponent({
  children,
  mobileHeight,
  desktopHeight,
}) {
  return (
    <div
      className={`bg-purple-300 ${mobileHeight ? mobileHeight : "h-[15vh]"} ${
        desktopHeight ? desktopHeight : "h-[20vh]"
      }`}
    >
      <h1 className="text-center text-2xl font-lg flex justify-center items-center h-full">
        {children}
      </h1>
    </div>
  );
}
