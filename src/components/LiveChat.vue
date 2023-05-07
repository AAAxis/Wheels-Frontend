<template>
  <div class="live-chat">
    <header class="clearfix">
      <a href="/" >X</a>
      <span>LIVE CHAT</span>
    </header>
    <div class="chat">
      <div class="chat-history">
        <div v-for="message in messages" :key="message.id" class="chat-message">
          <div class="chat-message-content">
            <div class="chat-message-username">{{ message.username }}</div>
            <div class="chat-message-text">{{ message.text }}</div>
            <div class="chat-time">{{ message.time }}</div>
          </div>
        </div>
        <hr />
      </div>
      <div class="input-form">
        <input v-model="newMessage.username" placeholder="Please Type Here ..." type="text" required>
        <button type="submit" @click.prevent="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          username: 'Dima',
          text: 'Hello, what your Email address?',
          time: '13:35',
        },
      ],
      newMessage: {
        id: null,
        username: '',
        text: '',
        time: '',
      },
    };
  },
  methods: {
    
    sendMessage() {

      if (this.newMessage.username.length < 5) {
    // Either username or text field is empty
    alert('Please enter a message with at least 5 symbols.'); // display an error message if message is empty or too short
    return;
 
  } else { 
  this.newMessage.time = new Date().toLocaleTimeString();
  this.messages.push(this.newMessage);
  this.newMessage = {
    id: null,
    username: '',
    text: '',
    time: '', }
  }
  },


   
  },
};
</script>


<style>



.live-chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.live-chat header {
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.live-chat header a {
  float: right;
  color: #fff;
  text-decoration: none;
}

.live-chat .chat {
  height: 250px;
  overflow-y: auto;
  padding: 10px;
}

.live-chat .chat-history {
  margin-bottom: 10px;
}

.live-chat .chat-message {
  margin-bottom: 10px;
}

.live-chat .chat-message-content {
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
}

.live-chat .chat-message-username {
  font-weight: bold;
  margin-bottom: 5px;
}

.live-chat .chat-message-text {
  margin-bottom: 5px;
}

.live-chat .chat-time {
  font-size: 12px;
  color: #999;
}

.live-chat .input-form {
  display: flex;
  margin-top: 10px;
}

.live-chat input {
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.live-chat button {
  background-color: darkorange;
  color: #fff;

  border-radius: 5px;
  
  z-index: 9999;
}

</style>