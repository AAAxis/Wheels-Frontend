<template>
  <div class="apply-container">
    <h1 style="color: black">Apply for {{ job && job.title }}</h1><br>
    <p style="color: black">{{ job && job.description }}</p>
    <a v-if="job && job.link" :href="job.link" style="color: rgb(63, 63, 255)">Show More</a>
    <br><br>
    <form class="apply-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="resume">Resume</label>
        <input type="file" class="form-control" id="resume" ref="resumeInput" />
      </div>
      <div class="form-group">
        <label for="cover">Cover Letter</label>
        <textarea class="form-control" id="cover" v-model="cover"></textarea>
      </div>
      <button type="button" class="btn btn-primary" @click="requestVerificationCode">Submit</button>
    </form>

    <!-- Display application status message -->
    <div v-if="message" class="message">{{ message }}</div>

    <!-- Verification Code Modal -->
    <div class="modal" v-if="verificationCodeRequested">
      <div class="modal-content">
        <h2>Verification Code</h2>
        <p>An email containing a verification code has been sent to your email address.</p>
        <input type="text" class="form-control" v-model="verificationCode" placeholder="Enter verification code" /><br>
        <button type="button" class="btn btn-primary" @click="submitApplication">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jobs: [],
      job: null,
      link: null,
      name: '',
      email: '',
      resume: null,
      cover: '',
      verificationCode: '',
      verificationCodeRequested: false,
      message: '', // To store the application status message
    };
  },
  created() {
    const jobId = this.$route.params.id;
    this.fetchJobs(jobId);
  },
  methods: {
    fetchJobs(jobId) {
      axios
        .get('https://polskoydm.pythonanywhere.com/jobs')
        .then(response => {
          this.jobs = response.data;
          this.job = this.jobs.find(job => job.id === jobId);
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleResumeUpload(event) {
      this.resume = event.target.files[0];
    },
    requestVerificationCode() {
      // Create FormData object and append the file
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('resume', this.$refs.resumeInput.files[0]);
      formData.append('cover', this.cover);
      formData.append('type', this.job.type);
      formData.append('title', this.job.title);

      axios
        .post('https://polskoydm.pythonanywhere.com/send-verification-code', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log('Verification code sent');
          this.verificationCodeRequested = true; // Set verificationCodeRequested to true
        })
        .catch(error => {
          console.error(error);
        });
    },
    submitApplication() {
      axios
        .post('https://polskoydm.pythonanywhere.com/submit', {
          email: this.email,
          code: this.verificationCode
        })
        .then(response => {
          this.message = response.data.message;
          this.resetForm(); // Clear the form fields
        })
        .catch(error => {
          console.error(error);
        });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.resume = '';
      this.cover = '';
      this.verificationCode = '';
      this.verificationCodeRequested = false;
    },
  },
};
</script>


<style scoped>
.message {
  margin-top: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
}
.apply-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
}

.apply-form .form-group {
  margin-bottom: 20px;
}

.apply-form label {
  font-weight: bold;
}

.apply-form input[type="text"],
.apply-form input[type="email"],
.apply-form input[type="file"],
.apply-form button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.apply-form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.apply-form button:hover {
  background-color: #0069d9;
}

.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin: 100px auto;
  width: 300px;
  border-radius: 4px;
}
</style>
