<template>

<div class="product-grid">
  <h1>Products</h1>
  <div class="product-grid__cards">
    <div v-for="product in products" :key="product.id" class="product-grid__card" @click="addToCart(product)">
      <div class="product-grid__info">
        <h4 class="product-grid__name">{{product.name}}</h4>
    
      </div>
      <div class="product-grid__image-wrapper">
        <img :src="`${baseUrl}/${product.image}`" alt="product image" class="product-grid__image">
        <div class="product-grid__add-to-cart">
          <button class="btn btn-success">Add to cart</button> <p style="color:aliceblue">${{product.price}}</p>
        </div>
      </div>
    
    </div>
  </div>
<br>

      <h2>Shopping Cart</h2>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>{{item.product.name}}</td>
            <td>{{item.quantity}}</td>
            <td>${{item.product.price}}</td>
            <td>
  <button class="btn btn-danger" @click="removeFromCart(index)">
    <i class="fas fa-trash"></i>
  </button>
</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total:   ${{cartTotal}}</td>
          
            <td></td>
          </tr>
        </tfoot>
      </table>
      <br>
      <button class="btn btn-primary" @click="checkout">Checkout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

export default {
  data() {
    return {
      storeName: '',
      products: [],
      baseUrl: 'https://polskoydm.pythonanywhere.com/static/uploads',
      cartItems: [],
    }
  },
  created() {
    const storeId = window.location.href.split('/')[3];
    axios.get(`https://polskoydm.pythonanywhere.com/${storeId}/shop`)
      .then(response => {
        this.storeName = response.data[0].store
        this.products = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    },
  },
  methods: {
    addToCart(product) {
      const cartItem = this.cartItems.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cartItems.push({
          product,
          quantity: 1,
        });
      }
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },

    checkout() {
  if (this.cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  const data = {
    items: this.cartItems.map(item => ({
      product_id: item.product.id,
      quantity: item.quantity,
    })),
    total: this.cartTotal,
  };
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://polskoydm.pythonanywhere.com/checkout';
  const itemsInput = document.createElement('input');
  itemsInput.name = 'items';
  itemsInput.value = JSON.stringify(data.items);
  form.appendChild(itemsInput);
  const totalInput = document.createElement('input');
  totalInput.name = 'total';
  totalInput.value = data.total;
  form.appendChild(totalInput);
  document.body.appendChild(form);
  form.submit();
}
  },
}


  </script>


<style>

.product-grid__card {
  position: relative;
}

.product-grid__add-to-cart {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.product-grid__card:hover .product-grid__add-to-cart {
  opacity: 1;
}

.product-grid__add-to-cart button {
  margin: 10px;
}


.product-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.product-grid__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  grid-gap: 20px;

}

.product-grid__card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.product-grid__image {
  width: 16rem;
  height: 16rem;
  
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.product-grid__info {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-grid__name {
  margin: 0;
}

.product-grid__description {
  margin: 10px 0;
}

.product-grid__price {
  margin: 0;
}

.product-grid__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.cart-table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}
</style>