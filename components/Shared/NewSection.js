import React from "react";

export default function NewSection({ title, children, para1, para2 }) {
  return (
    <div className="text-secondary text-sm px-4 w-full">
      <div className="text-primary text-base font-bold">{title}</div>
      <br />
      <p>{para1}</p>
      <br />
      <p>{para2}</p>
      {children}
    </div>
  );
}
