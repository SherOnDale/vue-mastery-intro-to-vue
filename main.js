const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-nuetral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  }
});
