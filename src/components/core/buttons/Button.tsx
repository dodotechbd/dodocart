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
  const baseClass = 'rounded-md font-medium border duration-200 flex items-center ';
  const padding = small ? 'py-3 px-16 ' : 'py-4 px-14 ';
  const color = light
    ? `border-white bg-white ${
        filled
          ? 'text-black hover:text-white hover:bg-opacity-0'
          : 'text-white hover:text-black bg-opacity-0 hover:bg-opacity-100'
      } `
    : `border-black bg-black ${
        filled
          ? 'text-white hover:text-black hover:bg-opacity-0'
          : 'text-black hover:text-white bg-opacity-0 hover:bg-opacity-100'
      } `;
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed ' : 'opacity-100 ';
  const iconColor = light ? (filled ? 'black' : 'white') : filled ? 'white' : 'black';
  const finalClass = baseClass + padding + color + disabledClass + className;
  return (
    <button className={finalClass} {...rest}>
      {children} {icon ? <ArrowDown color={iconColor} className="ml-2" /> : null}
    </button>
  );
};
