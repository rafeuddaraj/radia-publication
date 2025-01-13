import { PasswordChangeForm } from '@/app/(accounts)/_components/password-change-form'

export default function PasswordPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Change Password</h1>
      <PasswordChangeForm />
    </div>
  )
}

