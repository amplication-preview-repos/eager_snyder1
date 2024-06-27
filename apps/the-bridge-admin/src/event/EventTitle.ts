import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "artistsNames";

export const EventTitle = (record: TEvent): string => {
  return record.artistsNames?.toString() || String(record.id);
};
