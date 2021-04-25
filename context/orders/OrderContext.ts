import React, { createContext } from 'react';

// const OrderContext = createContext();

type InitialStateType = {
  customer: unknown;
  products: Array<unknown>;
  total: number;
};

const initialState = {
  customer: {},
  products: [],
  total: 0,
};

// const OrderContext = createContext<{
//   state: InitialStateType;
//   dispatch: React.Dispatch<unknown>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });
const OrderContext = createContext<any>({
  state: initialState,
  dispatch: () => null,
});

// export default OrderContext;
export { OrderContext };
