import React, { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';
import classnames from 'classnames';

export type ButtonVariants =
  | 'primary'
  | 'tertiary'
  | 'outline'
  | 'naked'
  | 'link'
  | 'grey'
  | 'view';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
  type?: 'submit' | 'button';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button = forwardRef(
  (
    {
      children,
      className,
      variant = 'naked',
      type = 'button',
      size = 'lg',
      disabled,
      ...rest
    }: ButtonProps,
    ref?: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        className={classnames(
          className,
          'w-full p-2 font-medium rounded-md hover:opacity-90 focus:outline-none focus:opacity-80 active:-translate-y-0.5 outline-none transition-all',
          { 'bg-ch-primary text-white': variant === 'primary' },
          { 'bg-ch-tertiary text-white py-2.5 px-2': variant === 'tertiary' },
          {
            'bg-transparent border border-current py-[9px] px-[7px]': variant === 'outline',
          },
          {
            '!w-auto h-auto bg-transparent border-none shadow-none outline-none py-0 px-0':
              variant === 'naked',
          },
          {
            '!w-auto h-auto bg-transparent border-none shadow-none outline-none py-0 px-0 underline':
              variant === 'link',
          },
          {
            'bg-[#f6f8fa] text-black font-normal p-3 rounded-[7px] tracking-[-0.01em]':
              variant === 'grey',
          },
          {
            'bg-[#E6F9DC] text-[#6CBD45] font-normal p-3 rounded-[7px] tracking-[-0.01em]':
              variant === 'view',
          },
          {
            'opacity-70 hover:opacity-70 active:translate-y-0 cursor-not-allowed': disabled,
          },
          { 'text-base md:text-lg': size === 'lg' },
          { 'text-sm md:text-base': size === 'md' },
          { 'text-sm': size === 'sm' },
          { 'text-xs': size === 'xs' },
        )}
        type={type}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
