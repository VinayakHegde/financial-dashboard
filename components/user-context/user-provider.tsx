'use client';
import { createContext, useContext, ReactNode, useState } from 'react';
import { Profile } from '@/services/get-profile';

interface UserContextType {
  profile: Profile | null;
  updateProfile: (profile: Profile, password?: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
  value: Profile | null;
}



export const UserProvider: React.FC<UserProviderProps> = ({ children, value }) => {
  const [profile, setProfile] = useState<Profile | null>(value);
  const updateProfile = async (profile: Profile, password?: string) => {
    const result = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...profile, password }),
    });
    if (result.ok) {
      setProfile(profile);
    }
  }

  return <UserContext.Provider value={{ profile, updateProfile }}>{children}</UserContext.Provider>;
};