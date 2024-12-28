import { useState, useRef, useEffect, useCallback } from 'react';

interface UseDatePickerProps {
  initialValue: Date | null;
  onChange?: (date: Date) => void;
}

export const useDatePicker = ({
  initialValue,
  onChange,
}: UseDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialValue ?? new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const currentDate = selectedDate ?? new Date();
  const [displayedMonth, setDisplayedMonth] = useState(currentDate.getMonth());
  const [displayedYear, setDisplayedYear] = useState(currentDate.getFullYear());

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCalendar = useCallback(() => {
    if (!showCalendar && selectedDate) {
      setDisplayedMonth(selectedDate.getMonth());
      setDisplayedYear(selectedDate.getFullYear());
    }
    setShowCalendar((prev) => !prev);
  }, [showCalendar, selectedDate]);

  const handlePrevMonth = useCallback(() => {
    setDisplayedMonth((prev) => {
      if (prev === 0) {
        setDisplayedYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setDisplayedMonth((prev) => {
      if (prev === 11) {
        setDisplayedYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  }, []);

  const handleSelectDate = useCallback(
    (day: number) => {
      const newDate = new Date(displayedYear, displayedMonth, day);
      setSelectedDate(newDate);
      setShowCalendar(false);
      onChange?.(newDate);
    },
    [displayedMonth, displayedYear, onChange]
  );

  return {
    selectedDate,
    showCalendar,
    toggleCalendar,
    handleSelectDate,
    handlePrevMonth,
    handleNextMonth,
    displayedMonth,
    displayedYear,
    calendarRef,
  };
};