import { UpdateBookModal } from "@/components/modules/Book/UpdateBookModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { type IBooks } from "@/types";
import { Trash2, View } from "lucide-react";
import { BorrowModal } from "../Borrow/BorrowModal";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

interface IProps {
  book: IBooks;
}

export default function BookCard({ book }: IProps) {
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(book._id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <h1
          className={cn("text-xl", {
            "line-through": !book.available,
          })}
        >
          {book.title}
        </h1>
      </CardHeader>

      <CardDescription>
        <p className="mt-5">{book?.description}</p>
      </CardDescription>
      <CardContent className="flex flex-col text-left gap-2">
        <div>
          <span>Author: </span>
          {book?.author}
        </div>

        <div>
          <span>ISBN: </span>
          {book?.isbn}
        </div>

        <div>
          <span>GENRE: </span>
          {book?.genre}
        </div>

        <div>
          <span>Copies: </span>
          {book?.copies}
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <span>Status: </span>
          {book?.available ? "Available" : "Not Available"}
        </div>
      </CardFooter>
      <CardAction className="mx-auto">
        <div className="flex gap-3 justify-between">
          <UpdateBookModal book={book} />
          <Button
            onClick={handleDelete}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Button variant="link">
            <Link to={`/books/${book._id}`}>
              <View />
            </Link>
          </Button>

          <BorrowModal book={book} />
        </div>
      </CardAction>
    </Card>
  );
}
