import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: 'outlined' | 'contained' | 'text' | 'containedNew';
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  startIcon,
  endIcon,
  variant = 'text',
  type = 'button',
  className,
  ...others
}: IButtonProps) {
  return (
    <button
      {...others}
      className={clsx(
        'align-middle select-none  font-semibold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-6 rounded-full text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center justify-center gap-3',
        variant === 'outlined' && 'bg-none border border-primary',
        variant === 'contained' && 'bg-gradient',
        variant === 'containedNew' && 'bg-primary',
        className
      )}
      type={type}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
}
