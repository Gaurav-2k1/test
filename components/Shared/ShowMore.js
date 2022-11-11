import React, { useState } from "react";

export default function ShowMore({
  maxLines,
  className,
  children,
  showMoreText,
  hideText,
}) {
  const [showMore, setShowMore] = useState(false);
  const showHandler = () => {
    setShowMore(!showMore);
  };
  return (
    <div className={`text-justify ${className}`}>
      <div className={!showMore && `line-clamp-6`}>{children}</div>
      <div
        className="text-primary underline font-semibold"
        onClick={showHandler}
      >
        {!showMore ? `${showMoreText}` : hideText}
      </div>
    </div>
  );
}
