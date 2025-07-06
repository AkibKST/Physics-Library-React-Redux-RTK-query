import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetBorrowedBooksQuery } from "@/redux/api/baseApi";

interface BorrowedBook {
  _id: string;
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export default function BorrowSummary() {
  const { data: borrowedBooks = [], isLoading } =
    useGetBorrowedBooksQuery(undefined);

  console.log("Borrowed Books:", borrowedBooks);

  return (
    <Card className="mx-auto max-w-4xl p-10 my-10">
      <CardHeader>
        <CardTitle>Borrow Summary</CardTitle>
        <CardDescription>
          Displays a list of books that have been borrowed, along with the total
          quantity borrowed for each book.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book Title</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead className="text-right">
                  Total Quantity Borrowed
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowedBooks.data.map((book: BorrowedBook) => (
                <TableRow key={book._id}>
                  <TableCell className="font-medium text-left">
                    {book.book.title}
                  </TableCell>
                  <TableCell className="text-left">{book.book.isbn}</TableCell>
                  <TableCell className="text-right">
                    {book.totalQuantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
