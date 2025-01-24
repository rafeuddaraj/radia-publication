import { BookGrid } from "@/app/(accounts)/_components/book-grid";
import ComingSoon from "@/components/common/coming-soon";
import { COMING_SOON } from "@/config";

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">All Books</h1>
      {COMING_SOON ? <ComingSoon /> : <BookGrid />}
    </div>
  );
}
