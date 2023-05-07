<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button class="open-chat-button" @click="showChat = true"> <i class="fas fa-comments"></i></button>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-md-2 col-sm-4 col-xs-6 mb-4" v-for="branch in branches" :key="branch.id">
            <div class="card">
              <img :src="'https://polskoydm.pythonanywhere.com//static/uploads/' + branch.file" :alt="branch.title" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ branch.address }}</h5>
                <p class="card-text">{{ branch.name }}</p>
                <a :href="`/${branch.token}/shop`" class="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LiveChat v-if="showChat" @close="showChat = false" />
  </div>
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
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
</style>


<style>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
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
