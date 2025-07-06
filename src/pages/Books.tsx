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
        </div>
      </div>

      <div className="space-y-5 mt-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.map((book: IBooks) => (
          <BookCard book={book} key={book._id} />
        ))}
      </div>
    </Container>
  );
}
