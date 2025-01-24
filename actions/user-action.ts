"use server";

import { UserData } from "@/app/(accounts)/_components/profile-form";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import { revalidateTag } from "next/cache";

export const getUserData = async (userId: string) => {
  try {
    const userData = await fetchWithAuth(`/user/${userId}`, {
      method: "GET",
      next: { tags: ["single-user"] },
    });
    return userData;
  } catch {
    return null;
  }
};
export const updateUserData = async (data: UserData["data"]): Promise<any> => {
  try {
    const res = await fetchWithAuth(`/user/update`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    const respData = await res.json();
    if (!respData?.error) {
      revalidateTag("single-user");
      return JSON.stringify(respData?.data);
    }
    console.log({ respData });

    throw Error("Resp not found");
  } catch (err) {
    console.log({ err });

    return null;
  }
};
