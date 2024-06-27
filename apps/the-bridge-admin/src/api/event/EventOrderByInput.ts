import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  artistsNames?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  ticketPrices?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
