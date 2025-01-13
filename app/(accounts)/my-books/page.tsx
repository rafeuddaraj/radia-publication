import { BookGrid } from '@/app/(accounts)/_components/book-grid'

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">All Books</h1>
      <BookGrid />
    </div>
  )
}

