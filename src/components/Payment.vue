<template>
  <div>
    <h2>Payment</h2>

    <table class="cart-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>
            <div class="item-info">
              <img class="rounded" :src="`https://polskoydm.pythonanywhere.com/static/uploads/${item.image}`" width="40">
              <div class="item-details">
                <h4 class="item-name">{{ item.name }}</h4>
              </div>
            </div>
          </td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="total-label">Total:</td>
          <td class="total-price">${{ cartTotal }}</td>
        </tr>
      </tfoot>
    </table>

   
    <!-- Email Input -->
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
    </div>

    <!-- Name Input -->
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>

    <!-- Address Input -->
    <div class="form-group">
      <label for="address">Address:</label>
      <input type="text" id="address" v-model="address" required>
    </div>

    <div>
      <button @click="checkout">Proceed to Payment</button>
    </div>
  
   
  </div>

</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import axios from 'axios';

// Firebase configuration
const firebaseConfig = {
 
        apiKey: "AIzaSyASwq11lvLT6YfaGwp7W_dCBICDzVsBbSM",
 authDomain: "bankapp-9798a.firebaseapp.com",
 projectId: "bankapp-9798a",
 storageBucket: "bankapp-9798a.appspot.com",
 messagingSenderId: "868698601721",
 appId: "1:868698601721:web:e061dcefcb437f53854a28",
 measurementId: "G-WY7R44DDM4"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default {
  data() {
    return {
      orderID: null,
      cartItems: [],
      cartTotal: 0,
      email: '',
      name: '',
      address: '',
      paymentReceived: false,
    };
  },
  created() {
    this.orderID = this.$route.params.orderID;
    this.fetchOrder(this.orderID);
  },
  methods: {
    fetchOrder(orderID) {
      const db = firebase.firestore();
      db.collection('orders').doc(orderID).get()
        .then(doc => {
          if (doc.exists) {
            const orderData = doc.data();
            this.email = orderData.email;
            this.name = orderData.name;
            this.address = orderData.address;
            this.cartItems = orderData.cartItems;
            this.cartTotal = orderData.cartTotal;
            this.paymentReceived = orderData.paymentReceived;
          } else {
            console.log('No such order!');
          }
        })
        .catch(error => {
          console.log('Error getting order:', error);
        });
    },
    updateOrder() {
      const db = firebase.firestore();
      const orderRef = db.collection('orders').doc(this.orderID);
      const updatedOrderData = {
        email: this.email,
        name: this.name,
        address: this.address,
        // Include other fields as necessary
      };
      orderRef.update(updatedOrderData)
        .then(() => {
          console.log('Order updated successfully');
        })
        .catch(error => {
          console.error('Error updating order:', error);
        });
    },
    checkout() {
      if (this.cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      if (!this.email || !this.name || !this.address) {
        alert('Please provide your email, name, and address.');
        return;
      }
      this.updateOrder();
      axios.post(`https://polskoydm.pythonanywhere.com/payment/${this.orderID}`, {
        email: this.email,
        name: this.name,
        address: this.address,
      })
        .then(response => {
          window.location.href = `https://polskoydm.pythonanywhere.com/create-checkout-session/${this.orderID}`;
        })
        .catch(error => {
          // Handle the error
        });
    },
  },
};
</script>







<style>
.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.cart-table th,
.cart-table td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.cart-table thead th {
  background-color: #f0f0f0;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 1rem;
}

.total-label {
  font-weight: bold;
  text-align: right;
}

.total-price {
  font-weight: bold;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="email"],
input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
