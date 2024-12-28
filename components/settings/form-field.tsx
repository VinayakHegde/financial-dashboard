import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Typography } from '../typography';

type WrapperProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
} & Omit<WrapperProps, 'children'>;

export const FormField = ({
  register,
  errors,
  id,
  label,
  placeholder,
  type = 'text',
}: Props) => (
  <FormFieldWrapper id={id} label={label}>
    <input
      type={type}
      id={id}
      {...register(id)}
      className={`w-full px-4 h-10 desktop:h-[50px] border border-blue-50 rounded-[10px] bg-white cursor-pointer hover:border-blue-200 text-blue-200 text-sm desktop:text-custom-15 outline-none ${errors[id] ? 'border-danger' : ''}`}
      placeholder={placeholder}
    />
    {errors[id] && (
      <span className="text-danger -mt-3 pl-0">
        <Typography type="body" size="sm" color="inherit" weight="normal">
          {errors[id]?.message as string}
        </Typography>
      </span>
    )}
  </FormFieldWrapper>
);

export const FormFieldWrapper = ({ id, label, children }: WrapperProps) => (
  <div className="flex flex-col gap-2 desktop:gap-3">
    <label htmlFor={id}>
      <span className="hidden desktop:inline-block">
        <Typography type="body" size="md" color="gray-1000" weight="normal">
          {label}
        </Typography>
      </span>

      <span className=" desktop:hidden">
        <Typography
          type="body"
          size="custom-13"
          color="gray-1000"
          weight="normal"
        >
          {label}
        </Typography>
      </span>
    </label>
    {children}
  </div>
);

export const validatedFormField = (
  register: UseFormRegister<any>,
  errors: FieldErrors<any>,
) => {
  const Component = (props: Omit<Props, 'register' | 'errors'>) => (
    <FormField
      {...props}
      register={register as UseFormRegister<FieldValues>}
      errors={errors}
    />
  );
  Component.displayName = 'FormField';
  return Component;
};

/**
 * Inferred TypeScript type:
 * {
 *   fullName: string;
 *   userName: string;
 *   email: string;
 *   dateOfBirth: Date | null;
 *   presentAddress?: string;
 *   permanentAddress?: string;
 *  city?: string;
 * postcode?: string;
 * country?: string;
 *
 * }
 */
