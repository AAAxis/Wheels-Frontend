<template>
  <div>
    <Navbar />
    <router-view />
  </div>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
    integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
    crossorigin="anonymous"
  />

  <div class="container">


    <div class="row">
      <div class="col-lg-10 mx-auto">
        <div class="career-search mb-60">
          <form action="#" class="career-form mb-60">
            <div class="row">
              <div class="col-md-6 col-lg-3 my-1">
                <div style="width: 100%; height: 70px;" class="input-group position-relative">
                  <input
                    type="text"
                    class="form-control"
    
                    placeholder="Enter Your Keywords"
                    v-model="searchKeywords"
                  />
                  <div style="margin-left: 10px;" class="col-md-6 col-lg-3 my-2">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-light btn-custom"
                  @click="searchJobs"
                >
                  <i class="zmdi zmdi-search"></i>
                </button>
              </div>
                </div>
              </div>

           
            </div>
          </form>

          <div class="filter-result">
            <br />
            <div
              class="job-box d-md-flex align-items-center justify-content-between mb-30"
              v-for="job in filteredJobs"
              :key="job.id"
            >
              <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                  FD
                </div>
                <div class="job-content">
                  <h5 class="text-center text-md-left">{{ job.title }}</h5>
                  <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                    <li class="mr-md-4">
                      <i class="zmdi zmdi-pin mr-2"></i> {{ job.location }}
                    </li>
                    <li class="mr-md-4">
                      <i class="zmdi zmdi-money mr-2"></i> {{ job.salary }}
                    </li>
                    <li class="mr-md-4">
                      <i class="zmdi zmdi-time mr-2"></i> {{ job.type }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="job-right my-4 flex-shrink-0">
                <router-link :to="{ path: '/apply/' + job.id }" class="btn d-block w-100 d-sm-inline-block btn-light">
  Apply now
</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Navbar from './Navbar.vue'; // Import your Navbar component here

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      jobs: [],
      searchKeywords: '', // Holds the value of the search keywords
    };
  },
  mounted() {
    this.fetchJobs();
  },
 computed: {
  filteredJobs() {
    if (this.searchKeywords) {
      return this.jobs.filter((job) =>
        job.title.toLowerCase().includes(this.searchKeywords.toLowerCase())
      );
    } else {
      return this.jobs;
    }
  },
},
  methods: {
    fetchJobs() {
     

        axios
  .get('https://polskoydm.pythonanywhere.com/jobs')  // Use the correct endpoint matching your Flask route
  .then((response) => {
    this.jobs = response.data.jobs; // Update the jobs data
  })
  .catch((error) => {
    console.error(error);
  });
    },
    searchJobs() {
      // Method to trigger the search based on searchKeywords
      // You can perform additional logic here if needed
    },

    selectJob(jobId) {
    this.selectedJobId = jobId;
    router.push('/apply'); // Redirect to the "/apply" route
  },
  },
};
</script>


<style scoped>

/* ===== Career ===== */
.career-form {
  background-color: #4e63d7;
  border-radius: 5px;
  padding: 0 16px;
}

.career-form .form-control {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  padding: 12px 15px;
  color: #fff;
}

.career-form .form-control::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #fff;
}

.career-form .form-control::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}

.career-form .form-control:-ms-input-placeholder {
  /* IE 10+ */
  color: #fff;
}

.career-form .form-control:-moz-placeholder {
  /* Firefox 18- */
  color: #fff;
}

.career-form .custom-select {
  border: 0;
  padding: 12px 15px;
  color: #fff;
  width: 100%;
  border-radius: 5px;
  text-align: left;
  height: auto;
  background-image: none;
}

.career-form .custom-select:focus {
  -webkit-box-shadow: none;
          box-shadow: none;
}

.career-form .select-container {
  position: relative;
}

.career-form .select-container:before {
  position: absolute;
  right: 15px;
  top: calc(50% - 14px);
  font-size: 18px;
  color: #ffffff;
  content: '\F2F9';
  font-family: "Material-Design-Iconic-Font";
}

.filter-result .job-box {
background:#fff;
  -webkit-box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
          box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  border-radius: 10px;
  padding: 10px 35px;
}

ul {
  list-style: none; 
}

.list-disk li {
  list-style: none;
  margin-bottom: 12px;
}

.list-disk li:last-child {
  margin-bottom: 0;
}

.job-box .img-holder {
  height: 65px;
  width: 65px;
  background-color: #4e63d7;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(78, 99, 215, 0.9)), to(#5a85dd));
  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-radius: 65px;
}

.career-title {
  background-color: #4e63d7;
  color: #fff;
  padding: 15px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(78, 99, 215, 0.9)), to(#5a85dd));
  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);
}

.job-overview {
  -webkit-box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
          box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  border-radius: 10px;
}

@media (min-width: 992px) {
  .job-overview {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
  }
}

.job-overview .job-detail ul {
  margin-bottom: 28px;
}

.job-overview .job-detail ul li {
  opacity: 0.75;
  font-weight: 600;
  margin-bottom: 15px;
}

.job-overview .job-detail ul li i {
  font-size: 20px;
  position: relative;
  top: 1px;
}

.job-overview .overview-bottom,
.job-overview .overview-top {
  padding: 35px;
}

.job-content ul li {
  font-weight: 600;
  opacity: 0.75;
  border-bottom: 1px solid #ccc;
  padding: 10px 5px;
}

@media (min-width: 768px) {
  .job-content ul li {
    border-bottom: 0;
    padding: 0;
  }
}

.job-content ul li i {
  font-size: 20px;
  position: relative;
  top: 1px;
}

.mb-30 {
    margin-bottom: 30px;
}
</style>