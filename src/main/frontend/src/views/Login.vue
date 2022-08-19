<template>
  This is Login Page
  <button @click="login">Login</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router/router";

export default defineComponent({
  name: "Login",  // name of the component
  props: {},  // props of the component
  emits: ['login'],  // emits of the component
  setup(props, { emit }) {
    const login = () => {
      alert("Login!!");
      router.push("/");
    };
    return {
      login
    };
  }
});

</script>

<style scoped>

</style>