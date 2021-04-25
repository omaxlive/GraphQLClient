module.exports = {
  async rewrites() {
    return [
      {
        source: '/products',
        destination: '/products/products',
      },
      {
        source: '/orders',
        destination: '/orders/orders',
      },
    ];
  },
};
