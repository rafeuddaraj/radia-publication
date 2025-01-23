"use server";
import { BASE_API_URL } from "@/config";
import { wrapperFetch } from "./wrapper-fetch";

const USER_API_ENDPOINT = `${BASE_API_URL}/user`;

export const getUserData = async (userId: string) => {
  console.log(`${USER_API_ENDPOINT}/${userId}`);

  try {
    const userData = await wrapperFetch(`${USER_API_ENDPOINT}/${userId}`);
    return userData;
  } catch {
    return null;
  }
};
