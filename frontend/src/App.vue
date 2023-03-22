<template>
  <v-main>
    <transition mode="out-in">
      <router-view />
    </transition>
  </v-main>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
