'use client';

import { useRef, useState } from 'react';
import { appUser } from '@/utils/app-user';
import dynamic from 'next/dynamic';

const Image = dynamic(
  () => import('@/components/image').then((mod) => mod.Image),
  { ssr: false },
);

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
    <div className="relative inline-block w-fit h-fit overflow-hidden">
      <Image
        isAvatar
        src={preview ?? appUser(100)}
        alt={altText}
        className="desktop:hidden"
        width={100}
        height={100}
      />
      <Image
        isAvatar
        src={preview ?? appUser(90)}
        alt={altText}
        className="hidden desktop:block"
        width={90}
        height={90}
      />
      <button
        type="button"
        onClick={handleUploadClick}
        className="absolute right-0 bottom-0 transform rounded-full bg-white shadow-sm"
        aria-label="Upload profile picture"
      >
        <Image
          src="/pencil.svg"
          alt=""
          className="aria-hidden=true"
          width={30}
          height={30}
          tabIndex={-1}
        />
      </button>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
};
