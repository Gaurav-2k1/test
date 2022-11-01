import axios from "./axios";
import { stringify } from "qs";
import { isUndefined } from "lodash";

export const fetchVideoCourses = async ({ queryKey }) => {
  var [_, page, pageSize] = queryKey;
  if (isUndefined(page) || isUndefined(pageSize)) {
    page = 1;
    pageSize = 100;
  }
  const query = stringify(
    {
      fields: ["name", "duration"],
      populate: ["courseImage", "ratings", "reviews", "price"],
      pagination: {
        page,
        pageSize,
      },
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
