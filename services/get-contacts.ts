import { GET } from "@/app/api/contacts/route";
import { toCanonical } from "./to-canonical";

export type Contact = {
  id: number,
  name: string,
  role: string,
  avatar: string,
}

export const getContacts = async () => {
  const response = await GET();
  return toCanonical<Contact[]>(await response.json());
}