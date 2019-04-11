<template>
  <div>
    <a id="githubLogin" href="https://github.com/login/oauth/authorize?client_id=f548cd0789dfb2387fdb&scope=user,public_repo"
    v-if="!loading">
      <button>Github Login</button>
    </a>
    <div v-show="loading">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "login",
    data() {
      return {
        loading: false
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        if (location.search) {
          this.loading = true;
          let that = this;
          axios.post('http://0.0.0.0:5000/gconnect', {
            code: location.search.split('=')[1]
          })
            .then(function(response) {
              if (response.data.code == 0) {
                that.$store.commit('changePersonName', {
                  personName:response.data.username
                });
                that.$router.push({path: 'view'})
              }
            })
        }
      },
    }
  };
</script>
<style lang="less">
  div.personList {
    margin: 15px 0;
  }
  p.personName {
    box-shadow:
        0 1px 1px rgba(0,0,0,0.15),
        -1px 0 0 rgba(0,0,0,0.03),
        1px 0 0 rgba(0,0,0,0.03),
        0 1px 0 rgba(0,0,0,0.12);
    border: 1px solid rgba(0,0,0,0.12);
    padding: 30px 35px;
    cursor: pointer;
  }

</style>
