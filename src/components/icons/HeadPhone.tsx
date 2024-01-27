import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const HeadPhone = (props: IIconProps) => {
  const { title = 'HeadPhone', size = '48', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 48 48" size={size} title={title} {...otherProps}>
      <g clipPath="url(#clip0_153_311)">
        <path
          d="M14 26H12C9.79086 26 8 27.7909 8 30V36C8 38.2091 9.79086 40 12 40H14C16.2091 40 18 38.2091 18 36V30C18 27.7909 16.2091 26 14 26Z"
          stroke={props.color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 26H34C31.7909 26 30 27.7909 30 30V36C30 38.2091 31.7909 40 34 40H36C38.2091 40 40 38.2091 40 36V30C40 27.7909 38.2091 26 36 26Z"
          stroke={props.color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 30V24C8 19.7565 9.68571 15.6869 12.6863 12.6863C15.6869 9.68571 19.7565 8 24 8C28.2435 8 32.3131 9.68571 35.3137 12.6863C38.3143 15.6869 40 19.7565 40 24V30"
          stroke={props.color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_153_311">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export const HeadPhoneBold = (props: IIconProps) => {
  const { title = 'HeadPhone', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        d="M4 15V18C4 19.1046 4.89543 20 6 20H7C8.10457 20 9 19.1046 9 18V15C9 13.8954 8.10457 13 7 13H6C4.89543 13 4 13.8954 4 15ZM4 15V12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12L20 15M20 15C20 13.8954 19.1046 13 18 13H17C15.8954 13 15 13.8954 15 15V18C15 19.1046 15.8954 20 17 20H18C19.1046 20 20 19.1046 20 18V15Z"
        stroke={props.color || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
