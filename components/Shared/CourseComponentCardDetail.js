import React from "react";

export default function CourseComponentCardDetail({ icon, text }) {
  return (
    <div className="grid grid-cols-9 gap-1 align-center justify-between">
      {icon}
      <div className="ml-2 col-span-8 text-gray-600 font-semibold">{text}</div>
    </div>
  );
}
