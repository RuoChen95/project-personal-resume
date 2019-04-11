<template>
  <div>
    <h1>简历列表</h1>
    <div v-for="(person, index) in personList" :key="index" class="personList">
      <p @click="$router.push({ path: `edition?user=${person.id}`})" class="personName">
        {{person.name}}
      </p>
    </div>
    <h1>我的简历</h1>
    <div class="personList">
      <p @click="$router.push({ path: `edition?user=new`})" class="personName" v-show="userName != ''">
        {{userName}}
      </p>
    </div>
    <button @click="$router.push({path: 'login'})">login</button>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        personList: [],
        userName: this.$store.state.personName
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init: function() {
        let that = this;
        axios.get('http://0.0.0.0:5000/person/list/JSON')
          .then(function(response) {
            that.personList = response.data.personList;
          })
      },
      logout: function() {
        let that = this;
        axios.get('http://0.0.0.0:5000/logout')
          .then(function(response) {
            console.log(response)
          })
      }
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
