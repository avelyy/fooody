<script setup lang="ts">
import router from "../router/router";
import {reactive} from "vue";

const data = reactive({
  username: '',
  password: ''
});

const Login = () => {
  router.push("/home");
}
</script>

<template>
  <h3 class="display-3" style="color: #2042a7">Fooody World</h3>
  <va-form class="mt-3">
    <div>
      <va-input label="Username" v-model="data.username" />
    </div>
    <div class="mt-2">
      <va-input type="password" label="Password" v-model="data.password" />
    </div>
    <div>
      <va-button type="submit" class="mt-3" @click="Login"> Login</va-button>
    </div>
  </va-form>
</template>
