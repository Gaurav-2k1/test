import { isUndefined } from "lodash";
import React from "react";

export default function NewSection({ title, children, para1, para2 }) {
  return (
    <div className="text-secondary text-sm px-4 w-full md:px-5">
      <div className="text-primary text-base font-bold">{title}</div>
      {!isUndefined(para1) && <br />}
      <p>{para1}</p>
      {!isUndefined(para2) && <br />}
      <p>{para2}</p>
      {children}
    </div>
  );
}
