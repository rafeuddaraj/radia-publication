import { TransactionsTable } from "@/app/(accounts)/_components/transactions-table";

export default function TransactionsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Transactions</h1>
      <TransactionsTable />
    </div>
  );
}
