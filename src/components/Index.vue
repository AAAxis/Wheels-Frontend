<template>
<div class="hero-image">
  <div class="image-text"> 
        <h1>Wheels Delivery</h1></div>
    <div class="image-container">
    

      <img src="https://img.delicious.com.au/Lyhkcg4N/del/2022/10/p70-classic-angus-beef-burger-with-pickle-burger-sauce-176387-1.png" alt="Hero Image">
      <div class="centered"><h1>Wheels Delivery</h1></div>
        <div class="top-right">
          <a href="https://polskoydm.pythonanywhere.com/user_register">
            <button class="join-button">Sign Up</button>
          </a>
          <a href="https://polskoydm.pythonanywhere.com/user_login" class="sign-in">Sign in</a>
       
      </div>
 
    </div>
  </div>
<div class="container">
    <!-- START THE FEATURETTES -->
<br>
  <h2 style="text-align:center; margin:2rem;">Favourites Near You</h2>



  <div class="row">
      <div class="col-12">
        <button class="open-chat-button" @click="showChat = true"> <i class="fas fa-comments"></i></button>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-3 col-sm-4 col-xs-6 mb-4" v-for="branch in branches" :key="branch.id">
            <div class="card">
              <a :href="`/${branch.token}/shop`" ><img :src="'https://polskoydm.pythonanywhere.com/static/uploads/' + branch.file" :alt="branch.title" class="card-img-top">
            </a>
               <div class="card-body">
                <h5 class="card-title">{{ branch.name }}</h5>
              <p>20 min - $0 Delivery fee</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


 <hr class="featurette-divider">
 <h2 style="text-align:center; margin:2rem; color:black;">Products For Bussiness</h2>
<br>
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">Ordering Application on Android & IOS  <span class="text-muted">Another day another meal.</span></h2>
        <p class="lead">Have a great evening at your homes and maybe order some food.</p>
      </div>
      <div class="col-md-5">
         <img style="height:25rem;   object-position: center;  object-fit: none;
  background-repeat: no-repeat;" class="d-block w-100" src="https://polskoydm.pythonanywhere.com/static/images/post1.jpg" alt="First Photo">

      </div>
    </div>
<br>
    <hr class="featurette-divider">
<br>
    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">Driver Application <span class="text-muted">The interactive map view</span></h2>
        <p class="lead"> makes it easy for driver manage all the ongoing deliveries</p>
      </div>
      <div class="col-md-5 order-md-1">
          <img style="height:25rem;   object-position: center;  object-fit: none;
  background-repeat: no-repeat;" class="d-block w-100" src="https://polskoydm.pythonanywhere.com/static/images/post2.jpg" alt="Second Photo">

      </div>
    </div>
<br>
    <hr class="featurette-divider">
<br>




    <div class="row featurette">
       <div class="col-md-7">
        <h2 class="featurette-heading fw-normal lh-1">Admin Dashboard <span class="text-muted">Monitor and manage your transaction operations</span></h2>
        <p class="lead">that helps create excellent experiences with E-Commerce</p>
      </div>
       <div class="col-md-5">
              <img style="height:25rem;   object-position: center;  object-fit: none;
  background-repeat: no-repeat;" class="d-block w-100" src="https://polskoydm.pythonanywhere.com/static/images/post3.jpg" alt="Third photo">

          </div>
    </div>
<br>
    <hr class="featurette-divider">
    <!-- /END THE FEATURETTES -->
<br>
 
    <!-- Three columns of text below the carousel -->
    <div style='margin-top:10px;' class="row">
      <h2 style="text-align:center; margin:3rem; color:black;">Our R&D Team</h2>


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




</div>
  

    <LiveChat v-if="showChat" @close="showChat = false" />

</template>

<script>
import LiveChat from "./LiveChat.vue";
import axios from 'axios';

export default {
  components: {
    LiveChat
  },
  data() {
    return {
      branches: [],
      showChat: false
    };
  },
  mounted() {
    axios
      .get('https://polskoydm.pythonanywhere.com/')
      .then(response => {
        this.branches = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>

<style>
.hero-image {
  height: 50vh;
}

.image-container {
  position: relative;
  text-align: center;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.join-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sign-in {
  color: aliceblue;
  margin-left: 10px;
  font-weight: bold;

  text-decoration: none;
  cursor: pointer;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}


h1 {
  font-size: 3rem;
  color: white;
}

.open-chat-button {

  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  background-color: #4caf50;
  color: white;
  font-size: 24px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.open-chat-button i {
  margin-right: 0.5rem;
}


</style>
