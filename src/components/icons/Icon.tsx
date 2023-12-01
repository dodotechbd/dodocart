import { IIconProps } from '@interfaces';

const Icon = (props: IIconProps) => {
  const { children, title, size = '24px', className, height, fill, ...otherProps } = props;
  return (
    <svg
      style={{ fill: `${fill || 'none'}` }}
      className={className}
      height={height || size}
      width={size || 'auto'}
      fill={props.fill || 'none'}
      {...otherProps}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

export default Icon;
