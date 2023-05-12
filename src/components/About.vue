<template>
    <div>
      <Navbar />
      <router-view />
    </div>
    <main role="main">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Modern Restourant Management</h1>
        <p class="col-lg-10 fs-4">
How Can Technology Improve Employee Satisfaction at Hospitality and Resorts?</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form method="GET" action="https://polskoydm.pythonanywhere.com/subscribe" class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="floatingInput" name="name" class="form-control" id="floatingInput" placeholder="Name">
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" name="text" class="form-control" id="floatingInput" placeholder="Please Type..">
            <label for="floatingPassword">Message</label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Lets Talk</button>
              </form>
      </div>
    </div>
  </div>
<!-- Marketing messaging and featurettes
================================================== -->
<!-- Wrap the rest of the page in another container to center all the content. -->

<div class="container marketing">

  <!-- Three columns of text below the carousel -->
  <div class="row">
    <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://polskoydm.pythonanywhere.com/static/images/screenshot1.png" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>
        <h2 class="fw-normal">Roman Potchman</h2>
        <p>Operation Manager</p>
        <p><a class="btn btn-secondary" href="https://www.facebook.com/romchik2802">Contact &raquo;</a></p>  
    </div><!-- /.col-lg-4 -->
    <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://polskoydm.pythonanywhere.com/static/images/screenshot2.png" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>
        <h2 class="fw-normal">Dmitry Polskoy</h2>
        <p>Solution Architect</p>
        <p><a class="btn btn-secondary" href="https://www.facebook.com/polskoydm">Contact &raquo;</a></p>
  
    </div><!-- /.col-lg-4 -->
    <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="https://polskoydm.pythonanywhere.com/static/images/screenshot3.png" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"></text>
        <h2 class="fw-normal">Kateryna Trojan</h2>
        <p>UX/UI Developer</p>
        <p><a class="btn btn-secondary" href="https://www.instagram.com/troyanushka">Contact &raquo;</a></p>
    
    </div><!-- /.col-lg-4 -->
  </div><!-- /.row -->



</div><!-- /.container -->







</main>

</template>

<script>

import Navbar from "./Navbar.vue";

export default {
  name: "About",
  components: {
    Navbar,
  },
};

  </script>