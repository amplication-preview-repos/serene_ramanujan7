import { Article } from "../article/Article";

export type Sport = {
  articles?: Array<Article>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
