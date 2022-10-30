import axios from "./axios";
import { stringify } from "qs";

export const fetchLiveCourses = async () => {
  const query = stringify(
    {
      fields: ["name", "duration"],
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const { data } = await axios.get(`/live-courses?${query}`);
  console.log(data);
  return data;
};

export const fetchLiveCourseDetail = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const query = stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const { data } = await axios.get(`/live-courses/${id}?${query}`);
  return data;
};
