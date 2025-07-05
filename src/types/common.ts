export interface IBooks {
  _id: string;
  title: string;
  description: string;
  genre:
    | "FANTASY"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "MYSTERY"
    | "ROMANCE"
    | "FICTION";
  author: string;
  isbn: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TFilter = "all" | "high" | "medium" | "low";

export interface IUser {
  name: string;
  _id: string;
}
