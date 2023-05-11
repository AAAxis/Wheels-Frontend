<template>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <style>
  nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  
  ul {
    display: flex;
    list-style: none;
  }
  
  li {
    margin-right: 20px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  
  <script>
export default {
  name: 'Navbar'
}
</script>