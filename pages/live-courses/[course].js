import { useRouter } from "next/router";
import React from "react";

export default function LiveCourse() {
  const router = useRouter();
  const { course } = router.query;
  return <div>{course}</div>;
}
