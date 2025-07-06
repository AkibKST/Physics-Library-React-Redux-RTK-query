import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Pencil } from "lucide-react";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import TMInput from "../../form/TMInput";
import TMForm from "../../form/TMForm";
import TMTextarea from "../../form/TMTextArea";
import { type IBooks } from "@/types";
import TMSelect from "@/components/form/TMSelect";
import { DialogDescription } from "@radix-ui/react-dialog";
import { genreOptions } from "./AddBookModal";
import { useUpdateBookMutation } from "@/redux/api/baseApi";
import Swal from "sweetalert2";

export function UpdateBookModal({ book }: { book: IBooks }) {
  const [updateBook] = useUpdateBookMutation();
  // const param = useParams();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookData: Partial<IBooks> = {
      title: data.title,
      description: data.description,
      genre: data.genre,
      author: data.author,
      isbn: data.isbn,
      copies: Number(data.copies),
      available: true,
    };

    await updateBook({ ...bookData, _id: book._id }).unwrap();

    Swal.fire({
      title: "Book Updated Successfully!",
      text: "Your book has been updated.",
      icon: "success",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Update Book <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <TMForm className="space-y-3" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Update Book</DialogTitle>
          </DialogHeader>

          <TMInput defaultValue={book.title} name="title" label="Title" />
          <TMInput defaultValue={book.author} name="author" label="Author" />
          <TMTextarea
            defaultValue={book.description}
            name="description"
            label="Description"
          />
          <DialogDescription></DialogDescription>
          <TMSelect
            defaultValue={book.genre}
            name="genre"
            label="Genre"
            options={genreOptions}
          />
          <TMInput defaultValue={book.isbn} name="isbn" label="ISBN" />
          <TMInput
            defaultValue={String(book.copies)}
            name="copies"
            label="Copies"
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </TMForm>
      </DialogContent>
    </Dialog>
  );
}
