import { ArrowDown } from '@components/icons';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  light?: boolean;
  small?: boolean;
  filled?: boolean;
  icon?: boolean;
}

export const Button = ({ children, small, light, filled, className, icon, ...rest }: IProps) => {
  const disabled = rest.disabled ? rest.disabled : false;
  const baseClass = 'rounded-md font-medium border duration-200 flex items-center hover:opacity-80 ';
  const padding = small ? 'py-3 px-16 ' : 'py-4 px-14 ';
  const color = light
    ? `border-white ${filled ? 'text-black bg-white' : 'text-white bg-white/0'} `
    : `border-black ${filled ? 'text-white bg-black' : 'text-black bg-black/0'} `;
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed ' : 'opacity-100 ';
  const iconColor = light ? (filled ? 'black' : 'white') : filled ? 'white' : 'black';
  const finalClass = baseClass + padding + color + disabledClass + className;
  return (
    <button className={finalClass} {...rest}>
      {children} {icon ? <ArrowDown color={iconColor} className="ml-2" /> : null}
    </button>
  );
};
