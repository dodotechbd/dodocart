import { ArrowDown } from '@components/icons';

type BreadCumbsItem = {
  name: string;
  active?: boolean;
};

type Props = {
  items: BreadCumbsItem[];
};

export const BreadCumbs = ({ items }: Props) => {
  return (
    <div className="flex gap-3">
      {items.map((item, index) => (
        <div key={index} className={`flex items-center ${item.active ? 'text-black' : 'text-gray-400'}`}>
          {item.name}{' '}
          {items.length - 1 !== index && (
            <ArrowDown className="-rotate-90 text-gray-400" size={24} color="currentColor" />
          )}
        </div>
      ))}
    </div>
  );
};
