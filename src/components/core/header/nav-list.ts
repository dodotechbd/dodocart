import { CameraBold, ComputerBold, HeadPhoneBold, PhoneBold, SmartWatchBold } from '@components/icons';
import { GamingBold } from '@components/icons/Gaming';
import { IIconProps } from '@interfaces';
import { FC } from 'react';

export interface ILink {
  name: string;
  route: string;
  Icon?: FC<IIconProps>;
}

export const links: ILink[] = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Contact Us', route: '/contactus' },
  { name: 'Blog', route: '/blog' },
];

export const subLinks: ILink[] = [
  { name: 'Phones', route: '/phones', Icon: PhoneBold },
  { name: 'Computers', route: '/computers', Icon: ComputerBold },
  { name: 'Smart Watches', route: '/smartwatches', Icon: SmartWatchBold },
  { name: 'Cameras', route: '/cameras', Icon: CameraBold },
  { name: 'Headphones', route: '/headphones', Icon: HeadPhoneBold },
  { name: 'Gaming', route: '/gaming', Icon: GamingBold },
];
