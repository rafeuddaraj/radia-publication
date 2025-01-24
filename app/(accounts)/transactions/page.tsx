import { TransactionsTable } from "@/app/(accounts)/_components/transactions-table";
import ComingSoon from "@/components/common/coming-soon";
import { COMING_SOON } from "@/config";

export default function TransactionsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Transactions</h1>
      {COMING_SOON ? <ComingSoon /> : <TransactionsTable />}
    </div>
  );
}
