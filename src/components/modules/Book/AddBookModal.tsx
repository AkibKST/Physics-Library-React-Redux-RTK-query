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
import TMDatePicker from "../../form/TMDatePicker";
import TMForm from "../../form/TMForm";
import TMInput from "../../form/TMInput";
import TMSelect from "../../form/TMSelect";
import TMTextarea from "../../form/TMTextArea";

const priorityOptions = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export function AddBookModal() {
  // const dispatch = useAppDispatch();

  // const handleSubmit: SubmitHandler<FieldValues> = (data) => {
  //   console.log(data);
  //   const taskData: ITodo = {
  //     _id: uuid(),
  //     title: data.title,
  //     description: data.description,
  //     priority: data.priority,
  //     dueDate: new Date(data.dueDate).toISOString(),
  //     isCompleted: false,
  //     member: data.member,
  //   };

  // dispatch(addTask(taskData));
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add Book <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/* <TMForm className="space-y-3" onSubmit={handleSubmit}> */}
        <TMForm className="space-y-3" onSubmit={() => {}}>
          <DialogHeader>
            <DialogTitle>Add Book</DialogTitle>
          </DialogHeader>

          <TMInput name="title" label="Title" />
          <TMTextarea name="description" label="Title" />
          <TMSelect
            name="priority"
            label="Priority"
            options={priorityOptions}
          />
          <TMSelect name="member" label="member" options={priorityOptions} />
          <TMDatePicker name="dueDate" label="Due Date" />

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
