<template>
  <div>
    <h1>ユーザ情報</h1>
    <span>ID: {{ this.$route.params.id }}</span>
    <span>名前: {{ user.name }}</span>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.user.name,
      };
    },    
    data() {
      return {
        id: this.$route.params.id,
        users: [
          {
            id: 1,
            name: 'John Doe',
          },
          {
            id: 2,
            name: 'Kevin Smith',
          },
          {
            id: 3,
            name: 'Harry Bosch',
          },
        ],
      };
    },
    computed: {
      user() {
        return this.users.find((user) => user.id == this.id);
      },
    },
    mounted() {
      console.log(this.$route);
    },
    created() {
      console.log(this.$route);
    },

    
  };
</script>