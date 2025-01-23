import { getUserData } from "@/actions/user-action";
import { ProfileForm } from "@/app/(accounts)/_components/profile-form";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user;
  const userData = await getUserData(user?.id);
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <ProfileForm userData={userData} />
    </div>
  );
}
