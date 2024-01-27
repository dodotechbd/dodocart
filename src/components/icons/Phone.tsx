import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Phone = (props: IIconProps) => {
  const { title = 'Phone', size = '48', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 48 48" size={size} title={title} {...otherProps}>
      <g clipPath="url(#clip0_153_281)">
        <path
          d="M33.375 5.25H14.625C13.3306 5.25 12.2812 6.29933 12.2812 7.59375V40.4062C12.2812 41.7007 13.3306 42.75 14.625 42.75H33.375C34.6694 42.75 35.7188 41.7007 35.7188 40.4062V7.59375C35.7188 6.29933 34.6694 5.25 33.375 5.25Z"
          stroke={props.color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6H26.6875"
          stroke={props.color || 'black'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 37.7188V37.7404"
          stroke={props.color || 'black'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="13" y1="34" x2="35" y2="34" stroke={props.color || 'black'} strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_153_281">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export const PhoneBold = (props: IIconProps) => {
  const { title = 'Phone', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        d="M11 2C10.4477 2 10 2.44772 10 3C10 3.55228 10.4477 4 11 4V2ZM13.3438 4C13.896 4 14.3438 3.55228 14.3438 3C14.3438 2.44772 13.896 2 13.3438 2V4ZM13 18.8594C13 18.3071 12.5523 17.8594 12 17.8594C11.4477 17.8594 11 18.3071 11 18.8594H13ZM11 18.8702C11 19.4225 11.4477 19.8702 12 19.8702C12.5523 19.8702 13 19.4225 13 18.8702H11ZM7.3125 3.625H16.6875V1.625H7.3125V3.625ZM16.6875 3.625C16.7824 3.625 16.8594 3.70195 16.8594 3.79688H18.8594C18.8594 2.59738 17.887 1.625 16.6875 1.625V3.625ZM16.8594 3.79688V20.2031H18.8594V3.79688H16.8594ZM16.8594 20.2031C16.8594 20.298 16.7824 20.375 16.6875 20.375V22.375C17.887 22.375 18.8594 21.4026 18.8594 20.2031H16.8594ZM16.6875 20.375H7.3125V22.375H16.6875V20.375ZM7.3125 20.375C7.21758 20.375 7.14062 20.298 7.14062 20.2031H5.14062C5.14062 21.4026 6.11301 22.375 7.3125 22.375V20.375ZM7.14062 20.2031V3.79688H5.14062V20.2031H7.14062ZM7.14062 3.79688C7.14062 3.70195 7.21758 3.625 7.3125 3.625V1.625C6.11301 1.625 5.14062 2.59738 5.14062 3.79688H7.14062ZM11 4H13.3438V2H11V4ZM11 18.8594V18.8702H13V18.8594H11ZM6.5 17.5H17.5V15.5H6.5V17.5Z"
        fill={props.color || 'black'}
      />
    </Icon>
  );
};
