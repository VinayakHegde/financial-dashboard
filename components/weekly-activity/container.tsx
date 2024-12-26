"use client"

import { Activity } from '@/services/get-activities'
import { Section } from '../section'
import { WeeklyActivityChart } from './weekly-activity'

type Props = {
  activities: Activity[]
}
export const WeeklyActivity = ({ activities }: Props) => {
  return (
    <Section
      title="Weekly Activity"
      className='desktop:!w-[730px]'
    >
      <WeeklyActivityChart activities={activities} />
    </Section>
  )
}