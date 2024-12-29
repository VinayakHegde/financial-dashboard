'use client';

import { useDatePicker } from '@/hooks/use-date-picker';
import { getMonthYear, toLocaleDate } from '@/utils/date';
import { Typography } from '../typography';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('@/components/image').then(mod => mod.Image), { ssr: false });

type DatePickerProps = {
  value: Date | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select Date',
}) => {
  const {
    selectedDate,
    showCalendar,
    toggleCalendar,
    handleSelectDate,
    handlePrevMonth,
    handleNextMonth,
    displayedMonth,
    displayedYear,
    calendarRef,
  } = useDatePicker({ initialValue: value, onChange });

  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(displayedYear, displayedMonth, 1).getDay();

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return placeholder;
    return toLocaleDate(date.toISOString());
  };

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="relative inline-block w-full">
      <button
        type="button"
        onClick={(ev) => {
          ev.stopPropagation();
          toggleCalendar();
        }}
        className="flex items-center gap-2 justify-between w-full px-4 h-10 desktop:h-50px border border-pale-blue rounded-10 bg-white cursor-pointer hover:border-steel-blue outline-none"
      >
        <span className="hidden desktop:inline-block whitespace-nowrap overflow-hidden">
          <Typography
            type="body"
            size="custom-15"
            weight="normal"
            color="steel-blue"
          >
            {formatDateDisplay(selectedDate)}
          </Typography>
        </span>
        <span className="desktop:hidden">
          <Typography type="body" size="sm" weight="normal" color="steel-blue">
            {formatDateDisplay(selectedDate)}
          </Typography>
        </span>

        <span className={`${showCalendar ? '-rotate-90' : 'rotate-90'}`}>
          <Image
            src="/chevron-right.svg"
            alt="Toggle calendar"
            className="!h-3 !w-3"
          />
        </span>
      </button>

      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute z-10 w-64 bg-white border border-ivory-gray shadow-xl rounded mt-1"
        >
          <div className="flex items-center justify-between border-b border-ivory-gray p-4">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1 rotate-180"
              aria-label="Previous Month"
            >
              <Image
                src="/chevron-right.svg"
                alt="Previous Month"
                className="!h-3 !w-3"
              />
            </button>

            <Typography
              type="body"
              size="md"
              weight="semibold"
              color="steel-blue"
            >
              {getMonthYear(
                new Date(displayedYear, displayedMonth).toISOString(),
              )}
            </Typography>

            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1"
              aria-label="Next Month"
            >
              <Image
                src="/chevron-right.svg"
                alt="Next Month"
                className="!h-3 !w-3"
              />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold p-4">
            {weekdays.map((day) => (
              <Typography
                key={day}
                type="body"
                size="xs"
                weight="normal"
                color="steel-blue"
              >
                {day}
              </Typography>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-sm p-4 pt-0">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`blank-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNumber = i + 1;
              const isSelected =
                selectedDate &&
                selectedDate.getDate() === dayNumber &&
                selectedDate.getMonth() === displayedMonth &&
                selectedDate.getFullYear() === displayedYear;

              return (
                <button
                  key={`day-${dayNumber}`}
                  type="button"
                  className={`
                    h-8 w-8 rounded-full 
                    hover:bg-light-success hover:text-dark-gray transition-colors 
                    ${isSelected ? 'bg-success' : ''}
                  `}
                  onClick={() => handleSelectDate(dayNumber)}
                >
                  <Typography
                    type="body"
                    size="xs"
                    weight={isSelected ? 'semibold' : 'normal'}
                    color={isSelected ? 'dark-gray' : 'steel-blue'}
                  >
                    {`${dayNumber}`}
                  </Typography>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
