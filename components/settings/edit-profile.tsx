'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema } from './schema';
import { z } from 'zod';
import { FormFieldWrapper, validatedFormField } from './form-field';
import { ProfilePic } from './profile-pic';
import { useUserContext } from '../user-context';
import { useRouter } from 'next/navigation';
import { Button } from '../button';
import dynamic from 'next/dynamic';

const DatePicker = dynamic(
  () => import('@/components/date-picker').then((mod) => mod.DatePicker),
  { ssr: false },
);
type ProfileSchemaType = z.infer<typeof profileSchema>;

export const EditProfile = () => {
  const user = useUserContext();
  const dateOfBirth = user.profile?.dateOfBirth
    ? new Date(user.profile.dateOfBirth)
    : undefined;
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    setValue,
    getValues,
  } = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      ...user.profile,
      dateOfBirth,
      password: '',
    },
  });

  const route = useRouter();

  const onSubmit = async (data: ProfileSchemaType) => {
    const { password, ...profile } = data;
    await user.updateProfile(
      { ...profile, dateOfBirth: (profile.dateOfBirth as Date).toISOString() },
      password,
    );
    alert('Profile updated successfully');
    route.push('/');
  };

  const handleDOBChange = (date: Date) => {
    setValue('dateOfBirth', date, { shouldDirty: true });
  };

  const handleFileSelected = (file: string) => {
    setValue('displayPicture', file, { shouldDirty: true });
  };

  const FormField = validatedFormField(register, errors);
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col desktop:flex-row gap-10">
        <div className="flex items-center justify-center desktop:items-start">
          <ProfilePic
            initialImage={user.profile?.displayPicture ?? null}
            onChange={handleFileSelected}
          />
        </div>

        <form
          id="profile-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 grid grid-cols-1 gap-x-10 gap-y-6 w-full desktop:grid-cols-2 max-w-full mx-auto"
          role="form"
          aria-label="Edit Profile Form"
        >
          <FormField
            id="fullName"
            label="Your Name"
            placeholder="Enter your full name"
          />

          <FormField
            id="userName"
            label="User Name"
            placeholder="Enter the username"
          />

          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <FormField
            id="password"
            label="password"
            type="password"
            placeholder="Enter your password"
          />

          <FormFieldWrapper id="dateOfBirth" label="Date of Birth">
            <DatePicker
              value={getValues('dateOfBirth')}
              onChange={handleDOBChange}
              placeholder="Select your date of birth"
            />
          </FormFieldWrapper>
          <FormField
            id="presentAddress"
            label="Present Address"
            placeholder="Enter the address"
          />
          <FormField
            id="permanentAddress"
            label="Permanent Address"
            placeholder="Enter the address"
          />
          <FormField id="city" label="City" placeholder="Enter the city" />
          <FormField
            id="postcode"
            label="Postal Code"
            placeholder="Enter the Postal code"
          />
          <FormField
            id="country"
            label="country"
            placeholder="Enter the Country"
          />
        </form>
      </div>
      <div className="flex justify-end">
        <Button
          disabled={!isDirty || !isValid || isSubmitting}
          type="submit"
          form="profile-form"
          className="bg-dark-gray text-white px-4 py-2 rounded-10 desktop:rounded-15 w-full max-h-10 desktop:w-190px desktop:h-50px disabled:opacity-50"
          aria-label="Save Profile"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
