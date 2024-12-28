import { GET } from '@/app/api/profile/route';
import { toCanonical } from './to-canonical';

export type Profile = {
  fullName: string;
  userName: string;
  email: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postcode: string;
  country: string;
  displayPicture: string | null;
};

export const getProfile = async () => {
  const response = await GET();
  return toCanonical<Profile>(await response.json());
};
