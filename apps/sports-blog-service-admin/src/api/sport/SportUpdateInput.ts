import { ArticleUpdateManyWithoutSportsInput } from "./ArticleUpdateManyWithoutSportsInput";

export type SportUpdateInput = {
  articles?: ArticleUpdateManyWithoutSportsInput;
  name?: string | null;
};
