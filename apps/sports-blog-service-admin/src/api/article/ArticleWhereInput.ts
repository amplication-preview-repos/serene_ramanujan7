import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";

export type ArticleWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  sport?: SportWhereUniqueInput;
  title?: StringNullableFilter;
};
