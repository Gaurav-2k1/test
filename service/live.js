import axios from "./axios";

export const fetchLiveCourses = async () => {
  const { data } = await axios.get("/live/courses");
  return data;
};

export const fetchLiveCourseDetail = async ({ queryKey }) => {
  const [_, id] = queryKey;

  const { data } = await axios.get(`/live/course/detail?id=${id}`);
  return data;
};
