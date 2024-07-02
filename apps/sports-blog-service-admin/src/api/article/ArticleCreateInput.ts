import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";

export type ArticleCreateInput = {
  content?: string | null;
  sport?: SportWhereUniqueInput | null;
  title?: string | null;
};
