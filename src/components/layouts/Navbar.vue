<script setup>
import { onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";

import GambarLogo from "./GambarLogo.vue";
import NavigationLink from "./NavigationLink.vue";
import Userinfo from "./Userinfo.vue";
import AuthButton from "./AuthButton.vue";

const userStore = useUserStore();
const user = computed(() => userStore.getUser);
const isLoggedIn = computed(() => userStore.isLoggedIn);

onMounted(() => {
  userStore.fetchUser();
});
</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto my-2"
    >
      <GambarLogo />
      <Userinfo v-if="isLoggedIn" :user="user.data" />
      <AuthButton v-else />
      <NavigationLink />
    </div>
  </nav>
</template>
