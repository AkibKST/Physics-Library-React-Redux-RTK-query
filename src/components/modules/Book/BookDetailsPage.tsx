import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  BookOpen,
  Barcode,
  Edit,
  LucideHome,
} from "lucide-react";
import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

export function BookDetails() {
  const param = useParams();
  const { data } = useGetBookByIdQuery(param.id as string);
  console.log("BookDetails data:", data);

  const bookData = data?.data;

  return (
    <div className="grid gap-6 p-10 my-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{bookData?.title}</CardTitle>
              <CardDescription className="text-lg">
                by {bookData?.author}
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex">
                <Label className="flex items-center gap-2 text-muted-foreground">
                  <Barcode className="h-4 w-4" />
                  ISBN: <span>{bookData?.isbn}</span>
                </Label>
              </div>

              <div>
                <Label className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  Genre: <span>{bookData?.genre}</span>
                </Label>
              </div>

              <div>
                <Label className="flex items-center gap-2 text-muted-foreground">
                  <LucideHome className="h-4 w-4" />
                  Available: <span>{bookData?.available ? "Yes" : "No"}</span>
                </Label>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Created At: <span>{bookData?.createdAt}</span>
                </Label>
              </div>

              <div>
                <Label className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Last Updated At: <span>{bookData?.updatedAt}</span>
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Copies: {bookData?.copies}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
