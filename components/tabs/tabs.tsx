'use client';

import React, { useState } from 'react';

type TabProps = {
  title: string;
  isActive?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
};

type TabsProps = {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  className?: string;
};

export const Tab = ({ children }: TabProps) => {
  return children;
};

export const Tabs = ({ children, className = '' }: TabsProps) => {
  const tabList = React.Children.toArray(
    children,
  ) as React.ReactElement<TabProps>[];

  let defaultActiveIndex = 0;
  tabList.forEach((child, index) => {
    if (child.props.isActive) {
      defaultActiveIndex = index;
    }
  });

  const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

  const handleTabClick = (index: number, isDisabled?: boolean) => {
    if (!isDisabled) {
      setActiveIndex(index);
    }
  };

  const tabButtons = tabList.map((child, index) => {
    const { title, isDisabled } = child.props;
    const isActive = index === activeIndex;

    const baseClasses =
      'relative p-2 desktop:px-4 desktop:py-2 text-xs desktop:text-md font-medium transition-colors font-primary disabled:text-steel-blue disabled:cursor-not-allowed hover:text-gray-700';
    const activeClasses =
      'text-dark-gray before:h-1 before:bg-dark-gray before:w-full before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out before:rounded-t-10';

    return (
      <button
        key={`tab-btn-${index}`}
        onClick={() => handleTabClick(index, isDisabled)}
        disabled={isDisabled}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${index}`}
        id={`tab-${index}`}
        className={`${baseClasses} ${isActive ? activeClasses : ''}`}
      >
        {title}
      </button>
    );
  });

  const activeTabContent = tabList[activeIndex];
  const tabPanelId = `tabpanel-${activeIndex}`;

  return (
    <div className={className}>
      <div
        className="flex border-b gap-3 desktop:gap-10 border-ivory-gray"
        role="tablist"
      >
        {tabButtons}
      </div>
      <div
        className="p-6 desktop:p-8"
        role="tabpanel"
        id={tabPanelId}
        aria-labelledby={`tab-${activeIndex}`}
      >
        {activeTabContent}
      </div>
    </div>
  );
};

Tabs.Tab = Tab;
