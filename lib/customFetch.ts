"use server";

import { logout } from "@/actions/client-auth-action";

class CustomFetch {
  baseURL: string;
  accessToken: string;
  refreshToken: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.accessToken = "";
    this.refreshToken = "";
  }

  async request(
    endpoint: string,
    init: {
      headers?: HeadersInit;
      method?: string;
      next?: NextFetchRequestConfig;
    }
  ) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, init);
    const data = await response.json();
    // Checking public API
    const { headers } = init || {};
    if (!headers["authorization"]) {
      return data;
    } else {
      const isUnauthorize = data?.status == 401;
      if (isUnauthorize) {
        try {
          const res = await fetch(`${this.baseURL}/auth/refreshToken`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ refreshToken: this.refreshToken }),
          });
          const data = await res.json();
          if (!data?.error) {
            this.accessToken = data?.data?.accessToken;
            this.refreshToken = data?.data?.refreshToken;
            const response = await fetch(url, {
              ...init,
              headers: {
                ...init.headers,
                authorization: `berar ${this.accessToken}`,
              },
            });
            const newData = await response.json();
            return newData;
          }
          throw Error("Refresh Token Error");
        } catch {
          await logout();
        }
      }
      return data;
    }

    return response;
  }
}

const fetchInstance = new CustomFetch("https://api.example.com");
console.log(fetchInstance);
export { CustomFetch };
