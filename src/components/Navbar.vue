<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/features">Features</router-link></li>
        <li><router-link to="/careers">Careers</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/pricing">Pricing</router-link></li>
        <li><router-link :to="{ name: 'ShoppingCart', params: { token: 'abcd1234' }}">Shopping Cart</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  ul {
    display: flex;
    gap: 1rem;
  }
  
  li {
    list-style: none;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  