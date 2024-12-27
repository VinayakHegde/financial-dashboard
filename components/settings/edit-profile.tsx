"use client"

import { DatePicker } from "../date-picker"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema, } from './schema';
import { z } from 'zod';
import { FormFieldWrapper, validatedFormField } from "./form-field";
import { ProfilePic } from "./profile-pic";
import { useState } from "react";

type ProfileSchemaType = z.infer<typeof profileSchema>;

export const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      dateOfBirth: null,
      email: '',
      fullName: '',
      userName: '',
    },
  });

  const onSubmit = (data: ProfileSchemaType) => {
    console.log('Form data =>', data);
  };

  const handleDOBChange = (date: Date) => {
    setValue('dateOfBirth', date);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    // You can call an API or store the file in a FormData, etc.
  };
  const FormField = validatedFormField(register, errors);
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col desktop:flex-row gap-10">
        <div className="flex items-center justify-center w-full desktop:w-[90px] desktop:h-[90px]">
        <ProfilePic
          initialImage="app-user" // or use user's existing pic
          onChange={handleFileSelected}
        />
        </div>

        <form
          id="profile-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 grid grid-cols-1 gap-x-10 gap-y-6 w-full desktop:grid-cols-2 max-w-full mx-auto" >
          <FormField
            id="fullName"
            label="Your Name"
            placeholder="Enter your full name" />

          <FormField
            id="userName"
            label="User Name"
            placeholder="Enter the username" />

          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email" />

          <FormField
            id="password"
            label="password"
            type="password"
            placeholder="Enter your password" />


          <FormFieldWrapper
            id="dateOfBirth"
            label="Date of Birth">
            <DatePicker
              value={getValues('dateOfBirth')}
              onChange={handleDOBChange}
              placeholder="Select your date of birth"
            />
          </FormFieldWrapper>
          <FormField
            id="address-present"
            label="Present Address"
            placeholder="Enter the address" />
          <FormField
            id="address-permanent"
            label="Present Address"
            placeholder="Enter the address" />
          <FormField
            id="city"
            label="City"
            placeholder="Enter the city" />
          <FormField
            id="postcode"
            label="Postal Code"
            placeholder="Enter the Postal code" />
          <FormField
            id="country"
            label="country"
            placeholder="Enter the Country" />
        </form>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          form="profile-form"
          className="bg-gray-1000 text-white px-4 py-2 rounded-[9px] desktop:rounded-[15px] w-full max-h-40 desktop:w-[190px] desktop:h-[50px]"
        >Save</button>
      </div>
    </div>
  );
};
