"use server";

import { auth, signOut } from "@/auth";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const logout = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  await db.session.update({
    where: { userId },
    data: { refreshToken: null, accessToken: null },
  });
  signOut({ redirect: false });
  redirect("/login");
};
