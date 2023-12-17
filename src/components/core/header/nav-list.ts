import {
  Camera,
  CameraBold,
  Computer,
  ComputerBold,
  Gaming,
  GamingBold,
  HeadPhone,
  HeadPhoneBold,
  Phone,
  PhoneBold,
  SmartWatch,
  SmartWatchBold,
} from '@components/icons';
import { IIconProps } from '@interfaces';
import { FC } from 'react';

export interface ILink {
  name: string;
  route: string;
  Icon?: FC<IIconProps>;
  IconLight?: FC<IIconProps>;
}

export const links: ILink[] = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Contact Us', route: '/contactus' },
  { name: 'Blog', route: '/blog' },
];

export const subLinks: ILink[] = [
  { name: 'Phones', route: '/phones', Icon: PhoneBold, IconLight: Phone },
  { name: 'Computers', route: '/computers', Icon: ComputerBold, IconLight: Computer },
  { name: 'Smart Watches', route: '/smartwatches', Icon: SmartWatchBold, IconLight: SmartWatch },
  { name: 'Cameras', route: '/cameras', Icon: CameraBold, IconLight: Camera },
  { name: 'Headphones', route: '/headphones', Icon: HeadPhoneBold, IconLight: HeadPhone },
  { name: 'Gaming', route: '/gaming', Icon: GamingBold, IconLight: Gaming },
];
