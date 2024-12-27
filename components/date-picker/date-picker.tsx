'use client';

import { useState, useRef, useEffect } from 'react';
import { getMonthYear, toLocaleDate } from '@/utils/date';
import { Image } from '../image';
import { Typography } from '../typography';

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
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ?? new Date()
  );

  const [showCalendar, setShowCalendar] = useState(false);

  const currentDate = selectedDate ?? new Date();
  const [displayedMonth, setDisplayedMonth] = useState(currentDate.getMonth());
  const [displayedYear, setDisplayedYear] = useState(currentDate.getFullYear());

  const calendarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCalendar = () => {
    if (!showCalendar && selectedDate) {
      setDisplayedMonth(selectedDate.getMonth());
      setDisplayedYear(selectedDate.getFullYear());
    }
    setShowCalendar((prev) => !prev);
  };

  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(displayedYear, displayedMonth, 1).getDay();

  const selectDate = (day: number) => {
    const newDate = new Date(displayedYear, displayedMonth, day);
    setSelectedDate(newDate);
    setShowCalendar(false);
    onChange?.(newDate);
  };

  const prevMonth = () => {
    let newMonth = displayedMonth - 1;
    let newYear = displayedYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setDisplayedMonth(newMonth);
    setDisplayedYear(newYear);
  };

  const nextMonth = () => {
    let newMonth = displayedMonth + 1;
    let newYear = displayedYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setDisplayedMonth(newMonth);
    setDisplayedYear(newYear);
  };

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return placeholder;
    return toLocaleDate(date.toISOString());
  };

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={(ev) => {
          ev.stopPropagation();
          toggleCalendar();
        }}
        className="flex items-center gap-2 justify-between w-full px-4 h-10 desktop:h-[50px] border border-blue-50 rounded-[10px] bg-white cursor-pointer hover:border-blue-200 outline-none"
      >
        <span className="hidden desktop:inline-block whitespace-nowrap overflow-hidden">
          <Typography
            type="body"
            size="custom-15"
            weight="normal"
            color="blue-200"
          >
            {formatDateDisplay(selectedDate)}
          </Typography>
        </span>
        <span className="desktop:hidden">
          <Typography type="body" size="sm" weight="normal" color="blue-200">
            {formatDateDisplay(selectedDate)}
          </Typography>
        </span>

        <span className={`${showCalendar ? '-rotate-90' : 'rotate-90'}`}>
          <Image
            src="/chevron-right.svg"
            alt="Open calendar"
            className="!h-3 !w-3"
          />
        </span>
      </button>

      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute z-10 w-64 bg-white border border-gray-200 shadow-xl rounded"
        >
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <button
              onClick={prevMonth}
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
              color="blue-200"
            >
              {getMonthYear(
                new Date(displayedYear, displayedMonth).toISOString()
              )}
            </Typography>

            <button onClick={nextMonth} className="p-1" aria-label="Next Month">
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
                color="blue-200"
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
                  className={`
                    h-8 w-8 rounded-full 
                    hover:bg-success-100 hover:text-gray-1000 transition-colors 
                    ${isSelected ? 'bg-success' : ''}
                  `}
                  onClick={() => selectDate(dayNumber)}
                >
                  <Typography
                    type="body"
                    size="xs"
                    weight={isSelected ? 'semibold' : 'normal'}
                    color={isSelected ? 'gray-1000' : 'blue-200'}
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
