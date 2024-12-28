import { Settings } from '@/components/settings';

export default async function SettingPage() {
  const [] = await Promise.all([]);
  return (
    <div className="flex flex-col gap-4 flex-1 overflow-hidden bg-gray-100">
      <Settings />
    </div>
  );
}
