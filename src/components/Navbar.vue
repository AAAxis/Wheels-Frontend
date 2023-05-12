<template>


<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Expand at sm</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/careers">Careers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pricing">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
      
      </div>
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
  