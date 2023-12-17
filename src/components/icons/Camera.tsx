import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Camera = (props: IIconProps) => {
  const { title = 'Camera', size = '48', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 48 48" size={size} title={title} {...otherProps}>
      <g clip-path="url(#clip0_153_306)">
        <path
          d="M10 14H12C13.0609 14 14.0783 13.5786 14.8284 12.8284C15.5786 12.0783 16 11.0609 16 10C16 9.46957 16.2107 8.96086 16.5858 8.58579C16.9609 8.21071 17.4696 8 18 8H30C30.5304 8 31.0391 8.21071 31.4142 8.58579C31.7893 8.96086 32 9.46957 32 10C32 11.0609 32.4214 12.0783 33.1716 12.8284C33.9217 13.5786 34.9391 14 36 14H38C39.0609 14 40.0783 14.4214 40.8284 15.1716C41.5786 15.9217 42 16.9391 42 18V36C42 37.0609 41.5786 38.0783 40.8284 38.8284C40.0783 39.5786 39.0609 40 38 40H10C8.93913 40 7.92172 39.5786 7.17157 38.8284C6.42143 38.0783 6 37.0609 6 36V18C6 16.9391 6.42143 15.9217 7.17157 15.1716C7.92172 14.4214 8.93913 14 10 14"
          stroke={props.color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 32C27.3137 32 30 29.3137 30 26C30 22.6863 27.3137 20 24 20C20.6863 20 18 22.6863 18 26C18 29.3137 20.6863 32 24 32Z"
          stroke={props.color || 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_153_306">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export const CameraBold = (props: IIconProps) => {
  const { title = 'Camera', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        d="M5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7Z"
        stroke={props.color || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
        stroke={props.color || 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const MainCamera = (props: IIconProps) => {
  const { title = 'MainCamera', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21ZM12 9.27273C9.69881 9.27273 7.83333 11.1043 7.83333 13.3636C7.83333 15.623 9.69881 17.4545 12 17.4545C14.3012 17.4545 16.1667 15.623 16.1667 13.3636C16.1667 11.1043 14.3012 9.27273 12 9.27273ZM12 10.9091C10.6193 10.9091 9.5 12.008 9.5 13.3636C9.5 14.7192 10.6193 15.8182 12 15.8182C13.3807 15.8182 14.5 14.7192 14.5 13.3636C14.5 12.008 13.3807 10.9091 12 10.9091ZM16.7222 10.0909C16.7222 9.63904 17.0953 9.27273 17.5556 9.27273H18.6667C19.1269 9.27273 19.5 9.63904 19.5 10.0909C19.5 10.5428 19.1269 10.9091 18.6667 10.9091H17.5556C17.0953 10.9091 16.7222 10.5428 16.7222 10.0909Z"
        fill={props.color || '#4E4E4E'}
      />
    </Icon>
  );
};

export const FrontCamera = (props: IIconProps) => {
  const { title = 'FrontCamera', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2222 21H9.77778C6.65675 21 5.09624 21 3.97524 20.2646C3.48995 19.9462 3.07328 19.5371 2.74902 19.0607C2 17.9601 2 16.4279 2 13.3636C2 10.2994 2 8.76721 2.74902 7.6666C3.07328 7.19014 3.48995 6.78104 3.97524 6.46268C4.69555 5.99013 5.59733 5.82123 6.978 5.76086C7.63685 5.76086 8.20412 5.27068 8.33333 4.63636C8.52715 3.68489 9.37805 3 10.3663 3H13.6337C14.6219 3 15.4728 3.68489 15.6667 4.63636C15.7959 5.27068 16.3631 5.76086 17.022 5.76086C18.4027 5.82123 19.3044 5.99013 20.0248 6.46268C20.51 6.78104 20.9267 7.19014 21.251 7.6666C22 8.76721 22 10.2994 22 13.3636C22 16.4279 22 17.9601 21.251 19.0607C20.9267 19.5371 20.51 19.9462 20.0248 20.2646C18.9038 21 17.3433 21 14.2222 21ZM15.2697 9.59961C15.2697 9.1854 14.9339 8.84961 14.5197 8.84961C14.1055 8.84961 13.7697 9.1854 13.7697 9.59961V9.74316C12.2996 8.99864 10.4581 9.24066 9.22951 10.4692C7.69954 11.9992 7.69954 14.4798 9.22951 16.0098C10.7595 17.5397 13.2401 17.5397 14.77 16.0098C15.421 15.3588 15.7957 14.5337 15.8923 13.6844C15.9391 13.2728 15.6434 12.9012 15.2319 12.8544C14.8203 12.8076 14.4487 13.1033 14.4019 13.5148C14.3422 14.0392 14.112 14.5465 13.7094 14.9491C12.7652 15.8933 11.2344 15.8933 10.2902 14.9491C9.34598 14.0049 9.34598 12.4741 10.2902 11.5299C10.9379 10.8822 11.8617 10.6788 12.6828 10.9198C12.3737 11.0637 12.1928 11.4061 12.2661 11.7542C12.3515 12.1595 12.7492 12.4189 13.1546 12.3335L14.6743 12.0135C15.0213 11.9404 15.2697 11.6342 15.2697 11.2796V9.59961Z"
        fill={props.color || '#4E4E4E'}
      />
    </Icon>
  );
};
