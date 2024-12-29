'use client';

import { Tabs } from '../tabs';
import { EditProfile } from './edit-profile';

export const Settings = () => {
  return (
    <section
      className={`flex overflow-hidden p-6 desktop:p-5 h-full`}
      role="region"
      aria-label="Settings Section"
    >
      <div className="rounded-25 bg-white w-full p-6 desktop:p-8">
        <Tabs>
          <Tabs.Tab
            title="Edit Profile"
            isActive
            aria-selected="true"
            aria-controls="edit-profile-panel"
          >
            <EditProfile />
          </Tabs.Tab>

          <Tabs.Tab title="Preferences" isDisabled aria-disabled="true" />
          <Tabs.Tab title="Security" isDisabled aria-disabled="true" />
        </Tabs>
      </div>
    </section>
  );
};
