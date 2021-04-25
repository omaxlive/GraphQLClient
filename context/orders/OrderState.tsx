// eslint-disable-next-line no-use-before-define
import React, { useReducer } from 'react';
import { SELECT_CUSTOMER, SELECT_PRODUCT, QUANTITY_PRODUCTS, UPDATE_TOTAL } from '../../types';
import { OrderContext } from './OrderContext';
import { OrderReducer } from './OrderReducer';

const OrderState: React.FC = ({ children }) => {
  // State de Orders
  const initialState = {
    customer: {},
    products: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const addCustomer = (customer) => {
    dispatch({
      type: SELECT_CUSTOMER,
      payload: customer,
    });
  };

  // Modify products
  const addProduct = (productsSelected) => {
    let newState;
    if (state.products.length > 0) {
      // Take a copy of the second arrangement to assign to the first
      newState = productsSelected.map((product) => {
        const newObject = state.products.find((productState) => productState.id === product.id);
        return { ...product, ...newObject };
      });
    } else {
      newState = productsSelected;
    }

    dispatch({
      type: SELECT_PRODUCT,
      payload: newState,
    });
  };

  // Modify the quantities of the products
  const quantityProducts = (newProduct) => {
    dispatch({
      type: QUANTITY_PRODUCTS,
      payload: newProduct,
    });
  };

  const updateTotal = () => {
    dispatch({
      type: UPDATE_TOTAL,
    });
  };

  return (
    <OrderContext.Provider
      value={{
        customer: state.customer,
        products: state.products,
        total: state.total,
        addCustomer,
        addProduct,
        quantityProducts,
        updateTotal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderState };
