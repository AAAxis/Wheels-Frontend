<template>
    <div class="checkout-container">
      <h1>Checkout</h1>
      <p>Order ID: {{ order_id }}</p>
      <p>Total: {{ total }}</p>
  
      <!-- Display items in the cart -->
      <div class="cart-items" v-for="item in cartItems" :key="item.product_id">
        <div class="cart-item">
          <div class="cart-item-details">
            <img :src="'https://polskoydm.pythonanywhere.com/static/uploads/' + item.image" width="40">
            <div>
              <span>{{ item.name }} x {{ item.quantity }} - ${{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional checkout fields -->
      <div class="checkout-fields">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">
      
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
      
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address">
      </div>
      
      <button @click="submitOrder">Submit Order</button>
  
      <div id="stripe-container"></div>
    </div>
  </template>




<script>
import axios from 'axios';

export default {
  name: 'Checkout',
  data() {
    return {
      order_id: '',
      total: '',
      name: '',
      email: '',
      address: '',
      cartItems: [], // Add cartItems data property
      // Add more data properties for additional checkout fields
    };
  },
  methods: {
    submitOrder() {
      // Prepare the data to send in the request
      const formData = new FormData();
      formData.append('items', JSON.stringify([...this.cartItems]));
      formData.append('total', this.total);
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('address', this.address);

      axios.post('https://your-flask-backend.com/checkout', formData) // Replace with the actual API endpoint URL
        .then(response => {
          const clientSecret = response.data.client_secret;
          this.initializeStripePayment(clientSecret);
        })
        .catch(error => {
          console.error(error);
          // Handle error scenario
        });
    },
    initializeStripePayment(clientSecret) {
      // Load Stripe.js library
      const stripeScript = document.createElement('script');
      stripeScript.src = 'https://js.stripe.com/v3/';
      stripeScript.onload = () => {
        // Initialize Stripe
        const stripe = window.Stripe('YOUR_STRIPE_PUBLIC_KEY'); // Replace with your Stripe public key
        
        // Create the payment form
        stripe
          .handleCardPayment(clientSecret)
          .then(result => {
            // Handle payment result
            if (result.error) {
              // Display error message to the user
              console.error(result.error.message);
            } else {
              // Payment successful
              console.log('Payment successful:', result.paymentIntent);
            }
          })
          .catch(error => {
            console.error(error);
          });
      };
      
      document.head.appendChild(stripeScript);
    },
  },
  mounted() {
    // Fetch cart items from the backend and update the cartItems data property
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      // Make an API request to fetch cart items from the backend
      axios.get('https://your-flask-backend.com/api/cart-items') // Replace with the actual API endpoint URL
        .then(response => {
          this.cartItems = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>


  
  <style scoped>
  .checkout-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 20px;
  }
  
  .cart-items {
    margin-bottom: 20px;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .cart-item-details {
    display: flex;
    align-items: center;
  }
  
  .cart-item-details img {
    margin-right: 10px;
  }
  
  .checkout-fields {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  </style>
  