import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Burger = (props: IIconProps) => {
  const { title = 'Burger', size = '40', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 40 40" size={size} title={title} {...otherProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
        fill={props.color || '#080341'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
        fill={props.color || '#080341'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
        fill={props.color || '#080341'}
      />
    </Icon>
  );
};
