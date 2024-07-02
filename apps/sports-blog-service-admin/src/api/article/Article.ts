import { Sport } from "../sport/Sport";

export type Article = {
  content: string | null;
  createdAt: Date;
  id: string;
  sport?: Sport | null;
  title: string | null;
  updatedAt: Date;
};
