import { BreadCumbs } from '@components/core';

export const Products = () => {
  const breadCumbsItems = [{ name: 'Home' }, { name: 'Catalog' }, { name: 'Smartphones', active: true }];
  return (
    <div className="container mx-auto px-8">
      <BreadCumbs items={breadCumbsItems} />
    </div>
  );
};
