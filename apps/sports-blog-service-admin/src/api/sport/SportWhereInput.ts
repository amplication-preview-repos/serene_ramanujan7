import { ArticleListRelationFilter } from "../article/ArticleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SportWhereInput = {
  articles?: ArticleListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
