import { getUserData } from "@/actions/user-action";
import {
  ProfileForm,
  UserData,
} from "@/app/(accounts)/_components/profile-form";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user;
  let userData: UserData = {
    data: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      year: "",
      semester: "",
      role: "",
      registration: "",
      department: "",
      institute: "",
      address: "",
      discordUsername: "",
      image: null,
    },
  };
  const response = await getUserData(user?.id as string);
  if (response instanceof Response) {
    if (response.ok) {
      userData = await response.json();
    }
  } else {
    if (response !== null) {
      userData = response;
    }
  }
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <ProfileForm userData={userData} />
    </div>
  );
}
