import { ArticleCreateNestedManyWithoutSportsInput } from "./ArticleCreateNestedManyWithoutSportsInput";

export type SportCreateInput = {
  articles?: ArticleCreateNestedManyWithoutSportsInput;
  name?: string | null;
};
