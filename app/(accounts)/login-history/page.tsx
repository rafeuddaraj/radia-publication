import { LoginHistoryTable } from "@/app/(accounts)/_components/login-history-table";
import ComingSoon from "@/components/common/coming-soon";
import { COMING_SOON } from "@/config";

export default function LoginHistoryPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Login History</h1>
      {COMING_SOON ? <ComingSoon /> : <LoginHistoryTable />}
    </div>
  );
}
