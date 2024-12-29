'use client';

import { MouseEvent, useState } from 'react';

type Ripple = {
  x: number;
  y: number;
  size: number;
  key: number;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      key: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
      props.onClick?.(e);
    }, 600);
  };

  return (
    <button
      {...props}
      className={`relative overflow-hidden ${props.disabled ? '' : 'hover:ring-2 hover:ring-steel-blue'} ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className="absolute rounded-full bg-white opacity-75 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};
