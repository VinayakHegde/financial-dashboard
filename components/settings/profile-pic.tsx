import { useRef, useState } from 'react';
import { Image } from '../image';
import { appUser } from '@/utils/app-user';

type ProfilePicUploaderProps = {
  initialImage: string | null;
  onChange?: (file: string) => void;
  altText?: string;
};

export const ProfilePic: React.FC<ProfilePicUploaderProps> = ({
  initialImage,
  onChange,
  altText = 'Profile picture',
}) => {
  const [preview, setPreview] = useState<string | null>(initialImage);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const filePreviewUrl = URL.createObjectURL(file);
      setPreview(filePreviewUrl);
      onChange?.(filePreviewUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative inline-block w-[100px] h-100px desktop:w-[90px] desktop:h-90px overflow-hidden">
      <Image
        isAvatar
        src={preview ?? appUser(100)}
        alt={altText}
        className="h-full w-full object-cover desktop:hidden"
      />
      <Image
        isAvatar
        src={preview ?? appUser(90)}
        alt={altText}
        className="h-full w-full object-cover hidden desktop:block"
      />
      <button
        type="button"
        onClick={handleUploadClick}
        className="
          absolute right-0 bottom-0 
          transform rounded-full
          bg-white shadow-sm
        "
        aria-label="Upload profile picture"
      >
        <Image
          src="/pencil.svg"
          alt="Upload profile picture"
          className="!h-30px !w-[30px]"
        />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};
