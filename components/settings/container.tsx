"use client"

import { Tabs } from '../tabs'
import { EditProfile } from './edit-profile'


export const Settings = () => {
  return (
    <section className={`flex overflow-hidden p-6 desktop:p-5 h-full`}>
      <div className="rounded-[25px] bg-white w-full p-6 desktop:p-8">
        <Tabs>
          <Tabs.Tab title="Edit Profile" isActive>
            <EditProfile />
          </Tabs.Tab>

          <Tabs.Tab title="Preferences" isDisabled />
          <Tabs.Tab title="Security" isDisabled />
        </Tabs>
      </div>
    </section>
  )
}

