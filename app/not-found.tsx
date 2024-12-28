import { CustomError } from '@/components/custom-error';

export default function NotFound() {
  return (
    <CustomError
      title="Page Not Found"
      message="Sorry, the page you are looking for does not exist."
    />
  );
}
