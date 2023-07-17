<template>
    <div>
      <pre>{{ fileContent }}</pre>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fileContent: '',
      };
    },
    mounted() {
      this.fetchFileContent();
    },
    methods: {
      fetchFileContent() {
        fetch('/.well-known/apple-developer-merchantid-domain-association')
          .then(response => response.text())
          .then(data => {
            this.fileContent = data;
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
  };
  </script>
  