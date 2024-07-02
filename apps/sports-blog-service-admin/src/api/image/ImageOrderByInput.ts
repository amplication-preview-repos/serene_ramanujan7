import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  base64?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
