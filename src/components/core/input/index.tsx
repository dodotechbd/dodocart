import { InputHTMLAttributes } from 'react';

type Props = {
  label?: string;
  labelClass?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, className, required, labelClass = 'font-medium', ...rest }: Props) => {
  return (
    <div>
      {label && (
        <label htmlFor={`#${label}`} className={labelClass}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className={
          'w-full mt-1.5 px-3 py-2 rounded-md border-black/20 focus:border-black border outline-none ' + className
        }
        {...rest}
        id={label}
      />
    </div>
  );
};
