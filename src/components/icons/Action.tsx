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
      <path d="M18 9L12 15L6 9" stroke={props.color || 'black'} strokeWidth="1.5" strokeLinecap="round" />
    </Icon>
  );
};

export const Plus = (props: IIconProps) => {
  const { title = 'Plus', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path d="M12 8L12 16" stroke={props.color || '#222222'} stroke-width="1.2" stroke-linecap="round" />
      <path d="M16 12L8 12" stroke={props.color || '#222222'} stroke-width="1.2" stroke-linecap="round" />
    </Icon>
  );
};

export const PlusCircle = (props: IIconProps) => {
  const { title = 'Plus Circle', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44771 11.4477 6 12 6C12.5523 6 13 6.44771 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z"
        fill={props.color || '#222222'}
      />
    </Icon>
  );
};

export const Minus = (props: IIconProps) => {
  const { title = 'Minus', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path d="M16 12L8 12" stroke={props.color || '#222222'} stroke-width="1.2" stroke-linecap="round" />
    </Icon>
  );
};

export const Edit = (props: IIconProps) => {
  const { title = 'Edit', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.204 10.796L19 9C19.5453 8.45475 19.8179 8.18213 19.9636 7.88803C20.2409 7.32848 20.2409 6.67153 19.9636 6.11197C19.8179 5.81788 19.5453 5.54525 19 5C18.4548 4.45475 18.1821 4.18213 17.888 4.03639C17.3285 3.75911 16.6715 3.75911 16.112 4.03639C15.8179 4.18213 15.5453 4.45475 15 5L13.1814 6.81866C14.1452 8.46926 15.5314 9.84482 17.204 10.796ZM11.7269 8.27312L4.8564 15.1436C4.43134 15.5687 4.21881 15.7812 4.07907 16.0423C3.93934 16.3034 3.88039 16.5981 3.7625 17.1876L3.1471 20.2646C3.08058 20.5972 3.04732 20.7635 3.14193 20.8581C3.23654 20.9527 3.40284 20.9194 3.73545 20.8529L6.81243 20.2375C7.40189 20.1196 7.69661 20.0607 7.95771 19.9209C8.21881 19.7812 8.43134 19.5687 8.8564 19.1436L15.7458 12.2542C14.1241 11.2386 12.7524 9.87628 11.7269 8.27312Z"
        fill={props.color || '#222222'}
      />
    </Icon>
  );
};

export const Close = (props: IIconProps) => {
  const { title = 'Close', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path d="M18 6L6 18" stroke={props.color || '#222222'} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 6L18 18" stroke={props.color || '#222222'} stroke-linecap="round" stroke-linejoin="round" />
    </Icon>
  );
};

export const View = (props: IIconProps) => {
  const { title = 'View', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <circle cx="12" cy="12" r="3.5" stroke={props.color || '#979797'} />
      <path
        d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
        stroke={props.color || '#979797'}
      />
    </Icon>
  );
};

export const Filters = (props: IIconProps) => {
  const { title = 'Filters', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        d="M4 5H10M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5H20M4 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19H20M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z"
        stroke={props.color || 'black'}
        stroke-linecap="round"
      />
    </Icon>
  );
};
