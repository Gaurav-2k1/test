import axios from "./axios";
import { stringify } from "qs";

export const fetchVideoCourses = async () => {
  const query = stringify(
    {
      fields: ["name", "duration"],
      populate: ["courseImage", "ratings", "reviews", "price"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const { data } = await axios.get(`/video-courses?${query}`);
  return data;
};

export const fetchVideoCourseDetail = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const query = stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const { data } = await axios.get(`/video-courses/${id}?${query}`);
  return data;
};
