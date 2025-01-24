"use server";

import { logout } from "@/actions/auth";
import { auth, ExtendedUser } from "@/auth";
import { BASE_API_URL } from "@/config";

// utils/apiClient.ts
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  console.log({ url, options });

  const session = await auth();
  const user: ExtendedUser | undefined = session?.user;

  if (!user) {
    throw new Error("User is not authenticated");
  }

  const accessToken = user.accessToken as string;
  const refreshToken = user.refreshToken as string;
  const fetchData = async (token: string) => {
    return fetch(`${BASE_API_URL}${url}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  let response = await fetchData(accessToken!);

  if (response.status === 401) {
    // 🔄 যদি 401 আসে, তাহলে রিফ্রেশ টোকেন ব্যবহার করে নতুন টোকেন নেওয়ার চেষ্টা করবো
    const refreshResponse = await fetch(`${BASE_API_URL}/auth/renew-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (refreshResponse.ok) {
      const {
        data: { accessToken: newAccessToken, refreshToken: newRefreshToken },
      } = await refreshResponse.json();

      if (session && session.user) {
        (session.user as ExtendedUser).accessToken = newAccessToken;
        (session.user as ExtendedUser).refreshToken = newRefreshToken;
      }
      response = await fetchData(newAccessToken);
    } else {
      console.log("I am Called");

      await logout();
      throw new Error("Unauthorized, logging out...");
    }
  }
  console.log({ response });

  return response;
};
