import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";

export type ArticleUpdateInput = {
  content?: string | null;
  sport?: SportWhereUniqueInput | null;
  title?: string | null;
};
