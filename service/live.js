import axios from "./axios";
import { stringify } from "qs";
import { isUndefined } from "lodash";

export const fetchLiveCourses = async ({ queryKey }) => {
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
  const { data } = await axios.get(`/live-courses?${query}`);
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

export const searchLiveCourse = async ({ queryKey }) => {
  const [_, query] = queryKey;
  const queryParams = stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $containsi: query,
            },
          },
          {
            skills: {
              name: {
                $containsi: query,
              },
            },
          },
        ],
      },
      fields: ["name", "duration"],
      populate: ["courseImage", "ratings", "reviews", "price"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const { data } = await axios.get(`/live-courses?${queryParams}`);
  return data;
};
