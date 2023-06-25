<template>
    <div class="apply-container">
      <h1 style="color: black">Apply for {{ job && job.title }}</h1><br>
     
       <p style="color: black">{{ job && job.description }} </p>
       <a v-if="job && job.link" :href="job.link" style="color: rgb(63, 63, 255)">Show More</a>

       <br>       <br>
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
          <input type="file" class="form-control" id="resume" v-on:change="handleResumeUpload" />
        </div>
        <div class="form-group">
        <label for="cover">Cover Letter</label>
        <textarea class="form-control" id="cover" v-model="cover"></textarea>
      </div>
        <button type="button" class="btn btn-primary" @click="submitApplication">Submit</button>
      </form>
  
      <!-- Display application status message -->
      <div v-if="message" class="message">{{ message }}</div>
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
        description: null,
        name: '',
        email: '',
        resume: null,
        cover: '',
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
      submitApplication() {
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('resume', this.resume);
        formData.append('cover', this.cover);
        formData.append('title', this.job.title); // Add the job title to the form data
        formData.append('type', this.job.type); // Add the job type to the form data
  
        axios
          .post('https://polskoydm.pythonanywhere.com/submit', formData)
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
</style>