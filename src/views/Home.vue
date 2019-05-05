<template>
  <div class="main">
    <div class="body-container">
      <main class="profile">
        <my-profile></my-profile>
      </main>
      <nav class="Body-nav">
        <div class="accountLink NavMenu-item">Sign-In</div>
        <div class="NavMenu-item">Profile</div>
        <div class="NavMenu-item">Help</div>
      </nav>
    </div>
    <footer>
      <p>This is a Personal Project</p>
      <p>Send your comments or suggestions to <a href="mailto:xrc_1995@163.com">me</a></p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MyProfile from "@/views/Edition.vue";
import axios from 'axios'

export default {
  name: "home",
  components: {
    MyProfile
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="less">
div.body-container {
  display: flex;

  width: 100%;
  main.profile {
    flex: 1 1;
    position: relative;

    padding: 1rem;
  }

  nav.Body-nav {
    width: 190px;
    padding: 1rem;
    border-left: 1px solid rgba(0,10,20,0.1);
    div.accountLink {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100px;
    }
    div.NavMenu-item {
      border-bottom: 1px solid rgba(0,10,20,0.1);
      padding: 1rem 0;
    }
  }
}
footer {
  border-top: 1px solid rgba(0,10,20,0.1);
  padding: 1rem;

  text-align: right;
}
</style>
