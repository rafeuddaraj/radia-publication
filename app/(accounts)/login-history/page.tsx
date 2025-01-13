import { LoginHistoryTable } from '@/app/(accounts)/_components/login-history-table'

export default function LoginHistoryPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Login History</h1>
      <LoginHistoryTable />
    </div>
  )
}

