import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Twitter = (props: IIconProps) => {
  const { title = 'Twitter', size = '16', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 16 16" size={size} title={title} {...otherProps}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 2.91193C15.4121 3.17965 14.7791 3.3607 14.1152 3.4416C14.7932 3.02556 15.3135 2.36588 15.5586 1.58004C14.9238 1.96525 14.2222 2.2455 13.4728 2.39573C12.8755 1.74183 12.0218 1.3335 11.0771 1.3335C9.26548 1.3335 7.79574 2.84066 7.79574 4.69933C7.79574 4.9632 7.82391 5.21938 7.88026 5.46592C5.15208 5.32531 2.73381 3.98668 1.11381 1.94792C0.831132 2.44677 0.669596 3.02556 0.669596 3.64191C0.669596 4.80912 1.24905 5.83958 2.12995 6.4434C1.59277 6.42703 1.08563 6.27391 0.642365 6.02352V6.06493C0.642365 7.69632 1.77402 9.0571 3.27663 9.36527C3.00147 9.44424 2.71128 9.48373 2.41169 9.48373C2.20039 9.48373 1.99378 9.46351 1.79374 9.42402C2.21166 10.7607 3.42313 11.7344 4.86001 11.7604C3.7368 12.6637 2.32059 13.202 0.783234 13.202C0.518398 13.202 0.256383 13.1866 0 13.1558C1.45284 14.1092 3.17896 14.6668 5.03187 14.6668C11.0705 14.6668 14.3715 9.53862 14.3715 5.09033C14.3715 4.94394 14.3687 4.79756 14.3631 4.65407C15.0045 4.17929 15.5614 3.58702 16 2.91193Z"
        fill={props.color || 'white'}
      />
    </Icon>
  );
};

export const Facebook = (props: IIconProps) => {
  const { title = 'Facebook', size = '16', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 16 16" size={size} title={title} {...otherProps}>
      <path
        d="M8.84757 3.81794C8.84757 3.98169 8.84757 4.51541 8.84757 5.27366H11.4546L11.1719 7.59763H8.84757C8.84757 11.1816 8.84757 15.9843 8.84757 15.9843H5.76238C5.76238 15.9843 5.76238 11.2452 5.76238 7.59763H4.15479V5.27366H5.76238C5.76238 4.35204 5.76238 3.69669 5.76238 3.51422C5.76238 2.64485 5.69688 2.23235 6.06629 1.55866C6.43588 0.885005 7.47838 -0.00543266 9.28147 0.0160048C11.085 0.0382236 11.8452 0.211724 11.8452 0.211724L11.4546 2.6885C11.4546 2.6885 10.3029 2.38441 9.73763 2.49279C9.1731 2.60119 8.84757 2.94894 8.84757 3.81794Z"
        fill={props.color || 'white'}
      />
    </Icon>
  );
};

export const Tiktok = (props: IIconProps) => {
  const { title = 'Tiktok', size = '16', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 16 16" size={size} title={title} {...otherProps}>
      <path
        d="M11.8836 3.358C11.2243 2.59144 10.8788 1.60104 10.9063 0.592723L8.4425 0.533203C8.4425 0.533203 8.4425 0.638323 8.4425 0.780083V10.6602C8.4769 13.786 3.53834 13.7102 3.92906 10.2551C4.16794 8.88136 5.6441 8.03592 6.95578 8.51384V5.99992C4.1001 5.50264 1.39386 7.7756 1.42234 10.6713C1.67194 16.9513 10.6793 16.9521 10.9292 10.6713C10.8663 10.4465 10.9015 6.26152 10.8926 5.90856C12.0129 6.60568 13.3164 6.95416 14.6366 6.90952V4.3132C13.4161 4.3132 12.4847 3.98872 11.8836 3.358Z"
        fill={props.color || 'white'}
      />
    </Icon>
  );
};

export const Instagram = (props: IIconProps) => {
  const { title = 'Instagram', size = '16', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 16 16" size={size} title={title} {...otherProps}>
      <g clip-path="url(#clip0_366_3786)">
        <path
          d="M11.6923 0H4.30769C3.1656 0.00122171 2.07063 0.455459 1.26304 1.26304C0.455459 2.07063 0.00122171 3.1656 0 4.30769V11.6923C0.00122171 12.8344 0.455459 13.9294 1.26304 14.737C2.07063 15.5445 3.1656 15.9988 4.30769 16H11.6923C12.8344 15.9988 13.9294 15.5445 14.737 14.737C15.5445 13.9294 15.9988 12.8344 16 11.6923V4.30769C15.9988 3.1656 15.5445 2.07063 14.737 1.26304C13.9294 0.455459 12.8344 0.00122171 11.6923 0ZM8 11.6923C7.26973 11.6923 6.55586 11.4758 5.94866 11.07C5.34147 10.6643 4.86821 10.0877 4.58875 9.41299C4.30929 8.7383 4.23617 7.9959 4.37864 7.27967C4.52111 6.56343 4.87277 5.90552 5.38914 5.38914C5.90552 4.87277 6.56343 4.52111 7.27967 4.37864C7.9959 4.23617 8.7383 4.30929 9.41299 4.58875C10.0877 4.86821 10.6643 5.34147 11.07 5.94866C11.4758 6.55586 11.6923 7.26973 11.6923 8C11.6913 8.97895 11.302 9.91751 10.6097 10.6097C9.91751 11.302 8.97895 11.6913 8 11.6923ZM12.6154 4.30769C12.4328 4.30769 12.2544 4.25356 12.1026 4.15213C11.9508 4.0507 11.8324 3.90653 11.7626 3.73786C11.6927 3.56919 11.6744 3.38359 11.71 3.20453C11.7457 3.02547 11.8336 2.861 11.9627 2.7319C12.0918 2.60281 12.2562 2.51489 12.4353 2.47928C12.6144 2.44366 12.8 2.46194 12.9686 2.5318C13.1373 2.60167 13.2815 2.71998 13.3829 2.87178C13.4843 3.02358 13.5385 3.20205 13.5385 3.38462C13.5385 3.62943 13.4412 3.86422 13.2681 4.03733C13.095 4.21044 12.8602 4.30769 12.6154 4.30769ZM10.4615 8C10.4615 8.48685 10.3172 8.96276 10.0467 9.36756C9.77622 9.77236 9.39178 10.0879 8.94199 10.2742C8.4922 10.4605 7.99727 10.5092 7.51978 10.4142C7.04229 10.3193 6.60368 10.0848 6.25943 9.74057C5.91518 9.39632 5.68074 8.95771 5.58576 8.48022C5.49078 8.00273 5.53953 7.5078 5.72583 7.05801C5.91214 6.60822 6.22765 6.22378 6.63244 5.95331C7.03724 5.68283 7.51315 5.53846 8 5.53846C8.65284 5.53846 9.27894 5.7978 9.74057 6.25943C10.2022 6.72106 10.4615 7.34716 10.4615 8Z"
          fill={props.color || 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_366_3786">
          <rect width="16" height="16" fill={props.color || 'white'} />
        </clipPath>
      </defs>
    </Icon>
  );
};
