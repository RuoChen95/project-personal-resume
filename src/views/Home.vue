<template>
  <div>
    <Base>
      <Edition></Edition>
    </Base>
  </div>
</template>

<script>
// @ is an alias to /src
import Base from "@/views/Base.vue";
import Edition from "@/views/Edition.vue";

export default {
  name: "home",
  components: {
    Base, Edition
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
</style>
