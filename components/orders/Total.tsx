// eslint-disable-next-line no-use-before-define
import React, { useContext } from 'react';
import { OrderContext } from '../../context/orders/OrderContext';

const Total = () => {
  const ContextUsed = useContext(OrderContext);
  const { total } = ContextUsed as any;

  return (
    <div className="flex items-center mt-5 justify-between bg-white p-3 ">
      <h2 className="text-gray-800 text-lg">Total to pay: </h2>
      <p className="text-gray-800 mt-0 ">$ {total}</p>
    </div>
  );
};

export default Total;
