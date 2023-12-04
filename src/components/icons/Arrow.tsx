import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Arrow = (props: IIconProps) => {
  const { title = 'Arrow', size = '32', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 32 32" size={size} title={title} {...otherProps}>
      <path
        d="M21.3333 27.6667C21.0679 27.6679 20.8132 27.5622 20.6267 27.3733L9.95999 16.7067C9.57006 16.3162 9.57006 15.6838 9.95999 15.2933L20.6267 4.62667C21.0207 4.25952 21.6347 4.27035 22.0155 4.65117C22.3963 5.03199 22.4071 5.64599 22.04 6.04L12.08 16L22.04 25.96C22.4299 26.3504 22.4299 26.9829 22.04 27.3733C21.8535 27.5622 21.5987 27.6679 21.3333 27.6667Z"
        fill={props.color || 'black'}
      />
    </Icon>
  );
};

export const ArrowDown = (props: IIconProps) => {
  const { title = 'Arrow Down', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path d="M18 9L12 15L6 9" stroke={props.color || 'black'} stroke-width="1.5" stroke-linecap="round" />
    </Icon>
  );
};
