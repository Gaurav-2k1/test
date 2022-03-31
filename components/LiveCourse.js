import React from "react";

export default function LiveCourse({ name }) {
  return (
    <div className="text-sm bg-blue-500 p-2 text-white text-center h-[10vh] flex flex-col items-center justify-center">
      {name}
    </div>
  );
}
