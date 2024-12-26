import { GET } from "@/app/api/cards/route";

export const getMyCards = async () => {
  const response = await GET();
  return response.json();
}