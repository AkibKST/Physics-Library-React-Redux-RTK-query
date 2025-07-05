import { UpdateTaskModal } from "@/components/modules/Book/UpdateTaskModal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import { type IBooks } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  book: IBooks;
}

export default function BookCard({ book }: IProps) {
  // const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div> */}
          <h1
            className={cn("text-xl", {
              "line-through": book.available,
            })}
          >
            {book.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <UpdateTaskModal book={book} />
          <Button
            // onClick={() => dispatch(deleteTask(task._id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={book.available}
            // onCheckedChange={() => dispatch(toggleCompleteState(task._id))}
          />
        </div>
      </div>
      <p className="mt-5">{book?.description}</p>
    </div>
  );
}
