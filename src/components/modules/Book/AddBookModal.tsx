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

// import { addTask } from "@/redux/features/todo/todoSlice";
// import { useAppDispatch } from "@/redux/hooks";
import { Plus } from "lucide-react";
import TMForm from "../../form/TMForm";
import TMInput from "../../form/TMInput";
import TMSelect from "../../form/TMSelect";
import TMTextarea from "../../form/TMTextArea";
import type { IBooks } from "@/types";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { DialogDescription } from "@radix-ui/react-dialog";

// eslint-disable-next-line react-refresh/only-export-components
export const genreOptions = [
  { value: "FANTASY", label: "FANTASY" },
  { value: "SCIENCE", label: "SCIENCE" },
  { value: "HISTORY", label: "HISTORY" },
  { value: "BIOGRAPHY", label: "BIOGRAPHY" },
  { value: "MYSTERY", label: "MYSTERY" },
  { value: "ROMANCE", label: "ROMANCE" },
  { value: "FICTION", label: "FICTION" },
];

export function AddBookModal() {
  const [createBook] = useCreateBookMutation();

  // console.log("Data:", data);

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

    await createBook(bookData).unwrap();

    // console.log("inside handleSubmit", res);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add Book <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <TMForm className="space-y-3" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Book</DialogTitle>
          </DialogHeader>

          <TMInput name="title" label="Title" />
          <TMInput name="author" label="Author" />
          <TMTextarea name="description" label="Description" />
          <DialogDescription></DialogDescription>
          <TMSelect name="genre" label="Genre" options={genreOptions} />
          <TMInput name="isbn" label="ISBN" />
          <TMInput name="copies" label="Copies" />

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
