<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import {computed} from "vue";

const layout = computed(() => MainLayout);
</script>

<template>
  <component :is="layout" v-if="layout" />
</template>

<style scoped>

</style>
