import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sportId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
