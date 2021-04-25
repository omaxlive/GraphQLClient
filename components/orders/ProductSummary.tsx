// eslint-disable-next-line no-use-before-define
import React, { useContext, useState, useEffect } from 'react';
import { OrderContext } from '../../context/orders/OrderContext';

const ProductSummary = ({ product }) => {
  const ContextUsed = useContext(OrderContext);
  const { quantityProducts, updateTotal } = ContextUsed as any;

  const [quantity, setQuantity] = useState(0);

  const updateQuantity = () => {
    const nuevoProducto = { ...product, quantity: Number(quantity) };
    quantityProducts(nuevoProducto);
  };

  useEffect(() => {
    updateQuantity();
    updateTotal();
  }, [quantity]);

  const { name, price } = product;

  return (
    <div className="md:flex md:justify-between md:items-center mt-5">
      <div className="md:w-2/4 mb-2 md:mb-0">
        <p className="text-sm">{name}</p>
        <p>$ {price}</p>
      </div>

      <input
        type="number"
        placeholder="Quantity"
        className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:ml-4"
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      />
    </div>
  );
};

export default ProductSummary;
