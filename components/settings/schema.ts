import { z } from 'zod';

export const profileSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: 'Name is required.' }),
  userName: z
    .string()
    .min(1, { message: 'Username is required.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  dateOfBirth: z
    .date({ invalid_type_error: 'Please pick a valid date.' })
    .or(z.null())
    .refine((val) => !!val, { message: 'Date of birth is required.' }),
});