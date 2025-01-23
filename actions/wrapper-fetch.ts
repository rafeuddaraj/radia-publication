"use server";

import { auth } from "@/auth";

export const wrapperFetch = async (url, options = {}) => {
  const session = await auth();
  const user = session?.user || {};
  console.log(user?.accessToken);

  const res = await fetch(url, {
    ...options,
    headers: {
      authorization: `berar ${user?.accessToken}`,
      "content-type": "application/json",
      ...options.headers,
    },
  });
  const data = await res.json();
  return data;
};
