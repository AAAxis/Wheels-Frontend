<template>

<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">

<div class="container-fluid">
<a class="navbar-brand" href="#">Wheels Delivery</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
<ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/careers">Careers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/news">News</a>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>


<br><br>


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
  