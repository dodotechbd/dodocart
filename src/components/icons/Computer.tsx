import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Computer = (props: IIconProps) => {
  const { title = 'Computer', size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 48 48" size={size} title={title} {...otherProps}>
      <g clip-path="url(#clip0_153_288)">
        <path
          d="M40 8H8C6.89543 8 6 8.89543 6 10V30C6 31.1046 6.89543 32 8 32H40C41.1046 32 42 31.1046 42 30V10C42 8.89543 41.1046 8 40 8Z"
          stroke={props.color || 'black'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 40H34"
          stroke={props.color || 'black'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 32V40"
          stroke={props.color || 'black'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30 32V40"
          stroke={props.color || 'black'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M6.85712 27.4286H41.1428" stroke={props.color || 'black'} stroke-width="2" stroke-linecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_153_288">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export const ComputerBold = (props: IIconProps) => {
  const { title = 'Computer', size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        d="M7 20H17M9 16V20M15 16V20M3.42857 13.7143H20.5714M4 4H20C20.5523 4 21 4.44772 21 5V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4Z"
        stroke={props.color || 'black'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};
