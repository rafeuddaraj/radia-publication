import { ProfileForm } from '@/app/(accounts)/_components/profile-form'

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <ProfileForm />
    </div>
  )
}

