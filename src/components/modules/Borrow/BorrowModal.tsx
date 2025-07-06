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

// import { addUser } from "@/redux/features/user/userSlice";
import TMForm from "../../form/TMForm";
import TMInput from "../../form/TMInput";
import { BookIcon } from "lucide-react";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import TMDatePicker from "@/components/form/TMDatePicker";
import {
  useBorrowBookMutation,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import type { IBooks } from "@/types";

export function BorrowModal({ book }: { book: IBooks }) {
  const [borrowBook] = useBorrowBookMutation();
  const [updateBook] = useUpdateBookMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const BorrowData: {
      book: string;
      quantity: number;
      dueDate: string;
    } = {
      book: book._id as string,
      quantity: Number(data.quantity),
      dueDate: data.dueDate.toISOString(),
    };
    console.log("BorrowData:", BorrowData);

    await borrowBook(BorrowData).unwrap();
    await updateBook({
      _id: book._id,
      available: book.copies - Number(data.quantity) > 0,
      copies: book.copies - Number(data.quantity),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Borrow <BookIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <TMForm className="space-y-3" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Borrow Book</DialogTitle>
          </DialogHeader>

          <TMInput name="quantity" label="Quantity" />
          <TMDatePicker name="dueDate" label="Due Date" />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Borrow It</Button>
            </DialogClose>
          </DialogFooter>
        </TMForm>
      </DialogContent>
    </Dialog>
  );
}
