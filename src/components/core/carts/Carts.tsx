import { useState } from 'react';
import { ProductCart } from './ProductCart';
export const Carts = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="container lg:px-40 px-3 mx-auto mt-5 mb-3 ">
      <div>
        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                (openTab === 1 ? 'text-white bg-blueGray-600' : 'text-blueGray-600 bg-white')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Profile
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                (openTab === 2 ? 'text-white bg-blueGray-600' : 'text-blueGray-600 bg-white')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Settings
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                (openTab === 3 ? 'text-white bg-blueGray-600' : 'text-blueGray-600 bg-white')
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Options
            </a>
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <div className={openTab === 1 ? 'block' : 'hidden'} id="link2">
          <ProductCart />
          <p>Hello Items--- 1</p>
        </div>
        <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
          <ProductCart />
          <p>Hello Items--- 2</p>
        </div>
        <div className={openTab === 3 ? 'block' : 'hidden'} id="link2">
          <ProductCart />
          <p>Hello Items--- 3</p>
        </div>
      </div>
    </div>
  );
};
