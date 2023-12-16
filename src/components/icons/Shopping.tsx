import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const Payment = (props: IIconProps) => {
  const { title = 'Payment', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <rect width="24" height="24" rx="12" fill={props.bgColor || 'black'} />
      <path
        d="M17.2229 13.9801C17.0473 13.8418 15.4969 12.1345 14.6189 11.3387C14.6152 11.335 14.6152 11.335 14.6152 11.3313V7.65504C14.6152 6.74346 13.8717 6 12.9601 6H7.53923C6.69116 6 6 6.69489 6 7.53923V16.1619C6 17.0735 6.74346 17.8169 7.65504 17.8169H9.23163H9.63138C9.69863 17.8169 9.75467 17.7572 9.7472 17.6899L9.66127 16.9577C9.6538 16.8979 9.60523 16.8568 9.54545 16.8568H9.39975H9.31009C9.24658 16.8568 9.19427 16.8045 9.19427 16.741V6.94521C9.19427 6.88169 9.24658 6.82939 9.31009 6.82939H12.9714C13.3412 6.82939 13.6438 7.132 13.6438 7.50187V15.5044V16.2927C13.6438 16.5467 13.4682 16.7634 13.2329 16.8306C13.2291 16.8306 13.2291 16.8306 13.2254 16.8306C12.8257 16.6139 12.3549 15.6874 12.2839 15.5417C12.2765 15.5305 12.2727 15.5156 12.2727 15.5044C12.2466 15.269 11.9813 12.99 10.7671 12.99C10.7335 12.99 10.6999 12.99 10.6663 12.9938C10.6663 12.9938 9.69489 13.076 10.4981 15.8443C10.4981 15.8518 10.5019 15.8555 10.5019 15.863L10.8568 18.9303C10.8568 18.934 10.8568 18.9377 10.8605 18.9452C10.8904 19.061 11.2939 20.6264 12.3362 21.736C12.3549 21.7584 12.3661 21.7846 12.3661 21.8144V22.0797C12.3661 22.0872 12.3624 22.0909 12.3549 22.0909H12.2615C12.0336 22.0909 11.8468 22.2777 11.8468 22.5056V23.5853C11.8468 23.8132 12.0336 24 12.2615 24H16.6588C16.8867 24 17.0735 23.8132 17.0735 23.5853V22.5131C17.0735 22.2852 16.8867 22.0984 16.6588 22.0984C16.6513 22.0984 16.6476 22.0946 16.6476 22.0872C16.7933 20.7347 17.3163 16.1096 17.5965 15.7472C17.604 15.736 17.6115 15.7248 17.6152 15.7098C17.6638 15.5417 17.9066 14.5143 17.2229 13.9801ZM7.72976 16.7484C7.72976 16.8082 7.6812 16.8531 7.62516 16.8531C7.25903 16.8531 6.96015 16.5542 6.96015 16.188V7.4944C6.96015 7.12827 7.25903 6.82939 7.62516 6.82939C7.68493 6.82939 7.72976 6.87796 7.72976 6.934V16.7484Z"
        fill={props.color || 'white'}
      />
    </Icon>
  );
};

export const Shipping = (props: IIconProps) => {
  const { title = 'Shipping', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <rect width="24" height="24" rx="12" fill={props.bgColor || 'black'} />
      <path
        d="M11.2778 16.6127C11.0212 16.3697 10.722 16.1829 10.3952 16.0665L9.71006 13.3986L17.8697 11.1159L18.7438 14.5224L11.2778 16.6127ZM8.68012 9.38794L14.1201 7.86638L14.9948 11.274L9.55537 12.7956L8.68012 9.38794ZM8.92425 16.0153C8.77237 16.0581 8.63119 16.1188 8.49394 16.1858L6.09544 6.83981H5.19319C5.10263 7.03725 4.91306 7.17619 4.68919 7.17619H3.56306C3.252 7.17619 3 6.91237 3 6.58781C3 6.26325 3.252 6 3.56306 6H4.68919C4.87819 6 5.03681 6.1035 5.13919 6.25144H6.87169V6.28012L6.89756 6.27225L9.37819 15.9377C9.22688 15.9517 9.07556 15.9737 8.92425 16.0153ZM9.06994 16.5834C10.1213 16.2893 11.2018 16.9406 11.4836 18.0392C11.7654 19.1366 11.1416 20.265 10.0898 20.5592C9.03844 20.8523 7.95787 20.2009 7.67606 19.1034C7.39425 18.006 8.01863 16.8776 9.06994 16.5834ZM8.7735 18.8351C8.89388 19.3054 9.35738 19.5844 9.80794 19.4578C10.2585 19.3312 10.5257 18.8481 10.4053 18.3778C10.2849 17.9076 9.82144 17.6286 9.37088 17.754C8.91975 17.8806 8.65256 18.3643 8.7735 18.8351ZM18.6735 16.5216L12.1012 18.3598C12.0894 18.2029 12.0675 18.0443 12.027 17.8862C11.9871 17.7281 11.9291 17.5796 11.8644 17.4367L18.4024 15.6086L18.6735 16.5216Z"
        fill={props.color || 'white'}
      />
    </Icon>
  );
};

export const Location = (props: IIconProps) => {
  const { title = 'Location', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <rect width="24" height="24" rx="12" fill={props.bgColor || 'black'} />
      <path
        d="M11.6953 4.5C10.945 4.50031 10.2022 4.64878 9.50951 4.93691C8.81679 5.22503 8.1878 5.64712 7.65864 6.17896C7.12948 6.7108 6.71056 7.34191 6.42594 8.03607C6.14131 8.73023 5.99658 9.47376 6.00006 10.224C6.00006 14.1792 10.0801 17.8056 11.3353 18.7656C11.4406 18.8526 11.573 18.9002 11.7097 18.9002C11.8463 18.9002 11.9787 18.8526 12.0841 18.7656C13.3417 17.7768 17.3881 14.1792 17.3881 10.224C17.3915 9.47397 17.2469 8.73063 16.9624 8.03662C16.6779 7.34262 16.2592 6.71162 15.7303 6.17981C15.2014 5.648 14.5727 5.22586 13.8803 4.9376C13.1878 4.64933 12.4453 4.50062 11.6953 4.5ZM11.6953 12.5904C11.2206 12.5904 10.7566 12.4496 10.3619 12.1859C9.96721 11.9222 9.6596 11.5474 9.47795 11.1088C9.2963 10.6703 9.24877 10.1877 9.34138 9.72218C9.43398 9.25663 9.66256 8.82899 9.9982 8.49334C10.3339 8.1577 10.7615 7.92912 11.227 7.83652C11.6926 7.74391 12.1752 7.79144 12.6137 7.97309C13.0522 8.15474 13.4271 8.46235 13.6908 8.85703C13.9545 9.25171 14.0953 9.71573 14.0953 10.1904C14.0953 10.8269 13.8424 11.4374 13.3923 11.8875C12.9422 12.3375 12.3318 12.5904 11.6953 12.5904Z"
        fill={props.color || 'white'}
      />
    </Icon>
  );
};

export const Guaranteed = (props: IIconProps) => {
  const { title = 'Guaranteed', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        d="M10.79 15.17C10.59 15.17 10.4 15.09 10.26 14.95L7.84 12.53C7.55 12.24 7.55 11.76 7.84 11.47C8.13 11.18 8.61 11.18 8.9 11.47L10.79 13.36L15.09 9.06003C15.38 8.77003 15.86 8.77003 16.15 9.06003C16.44 9.35003 16.44 9.83003 16.15 10.12L11.32 14.95C11.18 15.09 10.99 15.17 10.79 15.17Z"
        fill={props.color || '#797979'}
      />
      <path
        d="M12 22.75C11.37 22.75 10.74 22.54 10.25 22.12L8.67 20.76C8.51 20.62 8.11 20.48 7.9 20.48H6.18C4.7 20.48 3.5 19.28 3.5 17.8V16.09C3.5 15.88 3.36 15.49 3.22 15.33L1.87 13.74C1.05 12.77 1.05 11.24 1.87 10.27L3.22 8.68C3.36 8.52 3.5 8.13 3.5 7.92V6.2C3.5 4.72 4.7 3.52 6.18 3.52H7.91C8.12 3.52 8.52 3.37 8.68 3.24L10.26 1.88C11.24 1.04 12.77 1.04 13.75 1.88L15.33 3.24C15.49 3.38 15.89 3.52 16.1 3.52H17.8C19.28 3.52 20.48 4.72 20.48 6.2V7.9C20.48 8.11 20.63 8.51 20.77 8.67L22.13 10.25C22.97 11.23 22.97 12.76 22.13 13.74L20.77 15.32C20.63 15.48 20.48 15.88 20.48 16.09V17.79C20.48 19.27 19.28 20.47 17.8 20.47H16.1C15.89 20.47 15.49 20.62 15.33 20.75L13.75 22.11C13.26 22.54 12.63 22.75 12 22.75ZM6.18 5.02C5.53 5.02 5 5.55 5 6.2V7.91C5 8.48 4.73 9.21 4.36 9.64L3.01 11.23C2.66 11.64 2.66 12.35 3.01 12.76L4.36 14.35C4.73 14.79 5 15.51 5 16.08V17.79C5 18.44 5.53 18.97 6.18 18.97H7.91C8.49 18.97 9.22 19.24 9.66 19.62L11.24 20.98C11.65 21.33 12.37 21.33 12.78 20.98L14.36 19.62C14.8 19.25 15.53 18.97 16.11 18.97H17.81C18.46 18.97 18.99 18.44 18.99 17.79V16.09C18.99 15.51 19.26 14.78 19.64 14.34L21 12.76C21.35 12.35 21.35 11.63 21 11.22L19.64 9.64C19.26 9.2 18.99 8.47 18.99 7.89V6.2C18.99 5.55 18.46 5.02 17.81 5.02H16.11C15.53 5.02 14.8 4.75 14.36 4.37L12.78 3.01C12.37 2.66 11.65 2.66 11.24 3.01L9.66 4.38C9.22 4.75 8.48 5.02 7.91 5.02H6.18Z"
        fill={props.color || '#797979'}
      />
    </Icon>
  );
};

export const Stock = (props: IIconProps) => {
  const { title = 'Stock', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.43526 1.25H16.5647C17.1346 1.24998 17.6186 1.24997 18.0185 1.29132C18.4443 1.33534 18.8378 1.43094 19.2096 1.66071C19.5814 1.89048 19.8429 2.19971 20.0727 2.56088C20.2885 2.9001 20.5049 3.33297 20.7598 3.8428L20.7763 3.87574C20.786 3.89518 20.7949 3.91504 20.8029 3.93526L22.2065 7.4834C22.3735 7.90559 22.5586 8.4323 22.6127 8.97128C22.6681 9.52258 22.5921 10.1541 22.1601 10.7019C21.8068 11.15 21.3155 11.4863 20.75 11.6463V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H3.25V11.6464C2.68446 11.4863 2.19312 11.15 1.83975 10.7019C1.40779 10.1541 1.33182 9.52257 1.38718 8.97127C1.4413 8.43229 1.62639 7.90559 1.7934 7.4834L3.19701 3.93526C3.20501 3.91504 3.21388 3.89518 3.22361 3.87574L3.2401 3.84275C3.49498 3.33295 3.71139 2.90009 3.92723 2.56088C4.15704 2.19971 4.41853 1.89048 4.79031 1.66071C5.16208 1.43094 5.55561 1.33534 5.98142 1.29132C6.38134 1.24997 6.86529 1.24998 7.43526 1.25ZM17.9999 10.8875C18.3359 11.2433 18.7658 11.5096 19.25 11.6465V21.25H15.25V18.4678C15.25 18.028 15.25 17.6486 15.2218 17.3374C15.192 17.0082 15.1259 16.6822 14.9486 16.375C14.7511 16.033 14.467 15.7489 14.125 15.5514C13.8178 15.3741 13.4918 15.308 13.1627 15.2782C12.8514 15.25 12.472 15.25 12.0322 15.25H11.9678C11.528 15.25 11.1486 15.25 10.8373 15.2782C10.5082 15.308 10.1822 15.3741 9.875 15.5514C9.53296 15.7489 9.24892 16.033 9.05144 16.375C8.87407 16.6822 8.80802 17.0082 8.77818 17.3374C8.74997 17.6486 8.74998 18.028 8.75 18.4677V21.25H4.75V11.6465C5.23413 11.5095 5.66398 11.2433 5.99992 10.8875C6.5013 11.4186 7.2119 11.75 7.99991 11.75C8.78793 11.75 9.49853 11.4186 9.99992 10.8875C10.5013 11.4186 11.2119 11.75 11.9999 11.75C12.7879 11.75 13.4985 11.4186 13.9999 10.8875C14.5013 11.4186 15.2119 11.75 15.9999 11.75C16.7879 11.75 17.4985 11.4186 17.9999 10.8875ZM10.25 21.25H13.75V18.5C13.75 18.0189 13.7493 17.7082 13.7279 17.4727C13.7075 17.2476 13.6731 17.1659 13.6495 17.125C13.5837 17.011 13.489 16.9163 13.375 16.8505C13.3341 16.8269 13.2524 16.7925 13.0273 16.7721C12.7918 16.7507 12.4811 16.75 12 16.75C11.5189 16.75 11.2082 16.7507 10.9727 16.7721C10.7476 16.7925 10.6659 16.8269 10.625 16.8505C10.511 16.9163 10.4163 17.011 10.3505 17.125C10.3269 17.1659 10.2925 17.2476 10.2721 17.4727C10.2507 17.7082 10.25 18.0189 10.25 18.5V21.25ZM6.74991 9C6.74991 9.69036 7.30956 10.25 7.99991 10.25C8.69027 10.25 9.24991 9.69036 9.24991 9C9.24991 8.58579 9.5857 8.25 9.99991 8.25C10.4141 8.25 10.7499 8.58579 10.7499 9C10.7499 9.69036 11.3096 10.25 11.9999 10.25C12.6903 10.25 13.2499 9.69036 13.2499 9C13.2499 8.58579 13.5857 8.25 13.9999 8.25C14.4141 8.25 14.7499 8.58579 14.7499 9C14.7499 9.69036 15.3096 10.25 15.9999 10.25C16.6903 10.25 17.2499 9.69036 17.2499 9C17.2499 8.58579 17.5857 8.25 17.9999 8.25C18.4141 8.25 18.7499 8.58579 18.7499 9C18.7499 9.69036 19.3096 10.25 19.9999 10.25C20.3979 10.25 20.7522 10.0649 20.9823 9.77305C21.0962 9.62859 21.1513 9.43094 21.1202 9.12114C21.0879 8.79903 20.969 8.43275 20.8117 8.03518L19.4201 4.51739C19.1524 3.98204 18.9735 3.62749 18.8071 3.36612C18.6472 3.1147 18.5325 3.00562 18.421 2.93669C18.3095 2.86776 18.1606 2.81401 17.8642 2.78336C17.5505 2.75093 17.1446 2.75 16.5278 2.75H7.47214C6.85533 2.75 6.4494 2.75093 6.13569 2.78336C5.83927 2.81401 5.69044 2.86776 5.5789 2.93669C5.46737 3.00562 5.35274 3.1147 5.19276 3.36612C5.02646 3.62749 4.84755 3.98204 4.57983 4.51739L3.18823 8.03518C3.03095 8.43275 2.91202 8.79903 2.87967 9.12115C2.84856 9.43095 2.90366 9.62861 3.01759 9.77307C3.2477 10.0649 3.60196 10.25 3.99991 10.25C4.69027 10.25 5.24991 9.69036 5.24991 9C5.24991 8.58579 5.5857 8.25 5.99991 8.25C6.41413 8.25 6.74991 8.58579 6.74991 9Z"
        fill={props.color || '#797979'}
      />
    </Icon>
  );
};
export const Delivery = (props: IIconProps) => {
  const { title = 'Delivery', size = '24', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 24 24" size={size} title={title} {...otherProps}>
      <path
        d="M21.47 11.185L20.44 9.755C20.2095 9.43121 19.9051 9.16706 19.552 8.98445C19.199 8.80184 18.8075 8.70604 18.41 8.705H14.03V6.565C14.03 5.90196 13.7666 5.26608 13.2978 4.79724C12.8289 4.32839 12.193 4.065 11.53 4.065H4.56C3.89752 4.06685 3.26271 4.33083 2.79427 4.79928C2.32583 5.26772 2.06184 5.90253 2.06 6.565V16.505C2.06 16.9028 2.21803 17.2844 2.49934 17.5657C2.78064 17.847 3.16217 18.005 3.56 18.005H4.78C4.85551 18.54 5.1217 19.0298 5.5296 19.3842C5.9375 19.7385 6.45966 19.9337 7 19.9337C7.54033 19.9337 8.06249 19.7385 8.47039 19.3842C8.87829 19.0298 9.14449 18.54 9.22 18.005H14.78C14.8555 18.54 15.1217 19.0298 15.5296 19.3842C15.9375 19.7385 16.4597 19.9337 17 19.9337C17.5403 19.9337 18.0625 19.7385 18.4704 19.3842C18.8783 19.0298 19.1445 18.54 19.22 18.005H20.44C20.8378 18.005 21.2194 17.847 21.5007 17.5657C21.782 17.2844 21.94 16.9028 21.94 16.505V12.635C21.9376 12.1146 21.7733 11.6079 21.47 11.185ZM7 18.935C6.75277 18.935 6.5111 18.8617 6.30553 18.7243C6.09997 18.587 5.93976 18.3918 5.84515 18.1634C5.75054 17.9349 5.72578 17.6836 5.77402 17.4411C5.82225 17.1987 5.9413 16.9759 6.11611 16.8011C6.29093 16.6263 6.51366 16.5073 6.75613 16.459C6.99861 16.4108 7.24994 16.4355 7.47835 16.5302C7.70676 16.6248 7.90198 16.785 8.03933 16.9905C8.17669 17.1961 8.25 17.4378 8.25 17.685C8.25 18.0165 8.1183 18.3345 7.88388 18.5689C7.64946 18.8033 7.33152 18.935 7 18.935ZM13.03 17.005H9.15C9.00439 16.5491 8.71766 16.1513 8.3312 15.8691C7.94474 15.5868 7.47856 15.4347 7 15.4347C6.52143 15.4347 6.05526 15.5868 5.6688 15.8691C5.28234 16.1513 4.9956 16.5491 4.85 17.005H3.56C3.42739 17.005 3.30021 16.9523 3.20644 16.8586C3.11268 16.7648 3.06 16.6376 3.06 16.505V6.565C3.06 6.16718 3.21803 5.78565 3.49934 5.50434C3.78064 5.22304 4.16217 5.065 4.56 5.065H11.53C11.9278 5.065 12.3094 5.22304 12.5907 5.50434C12.872 5.78565 13.03 6.16718 13.03 6.565V17.005ZM17 18.935C16.7528 18.935 16.5111 18.8617 16.3055 18.7243C16.1 18.587 15.9398 18.3918 15.8451 18.1634C15.7505 17.9349 15.7258 17.6836 15.774 17.4411C15.8222 17.1987 15.9413 16.9759 16.1161 16.8011C16.2909 16.6263 16.5137 16.5073 16.7561 16.459C16.9986 16.4108 17.2499 16.4355 17.4784 16.5302C17.7068 16.6248 17.902 16.785 18.0393 16.9905C18.1767 17.1961 18.25 17.4378 18.25 17.685C18.25 18.0165 18.1183 18.3345 17.8839 18.5689C17.6495 18.8033 17.3315 18.935 17 18.935ZM20.94 16.505C20.94 16.6376 20.8873 16.7648 20.7936 16.8586C20.6998 16.9523 20.5726 17.005 20.44 17.005H19.15C19.0044 16.5491 18.7177 16.1513 18.3312 15.8691C17.9447 15.5868 17.4786 15.4347 17 15.4347C16.5214 15.4347 16.0553 15.5868 15.6688 15.8691C15.2823 16.1513 14.9956 16.5491 14.85 17.005H14.03V9.705H18.41C18.6486 9.7066 18.8834 9.76449 19.0954 9.87396C19.3074 9.98344 19.4906 10.1414 19.63 10.335L20.66 11.765C20.84 12.0196 20.9377 12.3232 20.94 12.635V16.505Z"
        fill={props.color || '#797979'}
      />
      <path
        d="M18.029 12.205H16.029C15.8964 12.205 15.7692 12.1523 15.6754 12.0586C15.5817 11.9648 15.529 11.8376 15.529 11.705C15.529 11.5724 15.5817 11.4452 15.6754 11.3515C15.7692 11.2577 15.8964 11.205 16.029 11.205H18.029C18.1616 11.205 18.2888 11.2577 18.3825 11.3515C18.4763 11.4452 18.529 11.5724 18.529 11.705C18.529 11.8376 18.4763 11.9648 18.3825 12.0586C18.2888 12.1523 18.1616 12.205 18.029 12.205Z"
        fill={props.color || '#797979'}
      />
    </Icon>
  );
};
