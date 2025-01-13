"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Sample data
const books = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "/placeholder.svg",
    description: "A novel about the Jazz Age in the United States.",
  },
  // Add more sample books here
];

export function BookGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Input
        placeholder="Search books by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="p-0">
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    height={300}
                    width={300}
                    src={book.cover}
                    alt={book.title}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="text-lg">{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {book.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">
                  <Book className="mr-2 h-4 w-4" />
                  Read Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
