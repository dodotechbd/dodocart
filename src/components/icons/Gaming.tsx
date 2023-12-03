import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Gaming = (props: IIconProps) => {
  const { title = 'Gaming', size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 48 48" size={size} title={title} {...otherProps}>
      <g clip-path="url(#clip0_153_317)">
        <path
          d="M40 12H8C5.79086 12 4 13.7909 4 16V32C4 34.2091 5.79086 36 8 36H40C42.2091 36 44 34.2091 44 32V16C44 13.7909 42.2091 12 40 12Z"
          stroke={props.color || 'black'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 24H20M16 20V28"
          stroke={props.color || 'black'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30 22V22.0207"
          stroke={props.color || 'black'}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M36 25.9999V26.0207"
          stroke={props.color || 'black'}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_153_317">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export const GamingBold = (props: IIconProps) => {
  const { title = 'Gaming', size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 7C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4ZM1 8C1 6.34315 2.34315 5 4 5H20C21.6569 5 23 6.34315 23 8V16C23 17.6569 21.6569 19 20 19H4C2.34315 19 1 17.6569 1 16V8Z"
        fill={props.color || 'black'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 9C8.55228 9 9 9.44771 9 10V11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7V10C7 9.44771 7.44772 9 8 9Z"
        fill={props.color || 'black'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 9.5C15.8284 9.5 16.5 10.1716 16.5 11V11.0104C16.5 11.8388 15.8284 12.5104 15 12.5104C14.1716 12.5104 13.5 11.8388 13.5 11.0104V11C13.5 10.1716 14.1716 9.5 15 9.5Z"
        fill={props.color || 'black'}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11.5C18.8284 11.5 19.5 12.1715 19.5 13V13.0103C19.5 13.8387 18.8284 14.5103 18 14.5103C17.1716 14.5103 16.5 13.8387 16.5 13.0103V13C16.5 12.1715 17.1716 11.5 18 11.5Z"
        fill={props.color || 'black'}
      />
    </Icon>
  );
};
