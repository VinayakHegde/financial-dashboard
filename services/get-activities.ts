import { GET } from "@/app/api/activities/route";
import { toCanonical } from "./to-canonical";
import { getWeekday } from "@/utils/date";

export type Activity = {
  date: string
  deposit: number
  withdrawal: number
}

export const getActiviries = async () => {
  const response = await GET();
  return toCanonical<Activity[]>((await response.json()).map((activity: any) => ({
    ...activity,
    date: getWeekday(activity.date)
  })));
}