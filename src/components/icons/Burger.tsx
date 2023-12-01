import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Burger = (props: IIconProps) => {
  const { title = 'Burger', size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 40 40" size={size} title={title} {...otherProps}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
        fill={props.fill || '#080341'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
        fill={props.fill || '#080341'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
        fill={props.fill || '#080341'}
      />
    </Icon>
  );
};
