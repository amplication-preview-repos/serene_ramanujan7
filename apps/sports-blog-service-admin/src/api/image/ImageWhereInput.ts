import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  base64?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};
