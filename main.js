Vue.component('product', {
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="Green Socks">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(index)">
        </div>
        <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
      </div>
    </div>`,
  props: {
    premium: {
      type: String
    }
  },
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-nuetral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0
        }
      ]
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) return 'Free';
      return '2.99';
    }
  }
});

const app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
});
