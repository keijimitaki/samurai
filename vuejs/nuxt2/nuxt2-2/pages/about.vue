<template>
  <h1>About Page</h1>
</template>

<script>
  export default {
    layout: "original",
    head() {
      return {
        title: 'About Page',
        meta:[
          { hid: 'description', name: 'description', content: 'これはAboutページです。'}
        ]       
      };
    },
  };
</script>