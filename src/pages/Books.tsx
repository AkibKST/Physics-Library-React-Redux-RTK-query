import { AddBookModal } from "@/components/modules/Book/AddBookModal";
import BookCard from "@/components/modules/Book/BookCard";
import Container from "@/components/ui/container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBooks } from "@/types";

export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  console.log(data, isLoading, isError);

  return (
    <Container className="mt-20">
      <div className="flex justify-between">
        <h1 className="text-xl">Books</h1>
        <div className="flex gap-5">
          <Tabs
            defaultValue="all"
            className="w-[400px]"
            // onValueChange={(e) => handleFilterChange(e as TFilter)}
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="high">High</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="low">Low</TabsTrigger>
            </TabsList>
          </Tabs>

          <AddBookModal />
        </div>
      </div>

      <div className="space-y-5 mt-5">
        {data?.data.length === 0 && (
          <div className="text-center mt-10 text-xl">Nothing to see here</div>
        )}
        {/* {tasks
          .filter((task) => task.isCompleted === false)
          .map((task: ITodo) => (
            <TaskCard task={task} />
          ))} */}
        {/* {tasks.some((task) => task.isCompleted === true) && (
          <div className="flex gap-5 items-center">
            <div className="border-b border-default h-[1px] w-full" />
            <p className="text-default/10">Completed</p>
            <div className="border-b border-default h-[1px] w-full" />
          </div>
        )} */}
        {data?.data
          .filter((book: IBooks) => book.available === true)
          .map((book: IBooks) => (
            <BookCard book={book} />
          ))}
      </div>
    </Container>
  );
}
