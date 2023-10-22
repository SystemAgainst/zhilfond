<script setup>
import CardList from "./CardList.vue";
import {onMounted, ref} from "vue";
import {getAllUsers} from "../api/users.js";

const users = ref([]);

onMounted(async () => {
  await getAllUsers().then((res) => {
    users.value = res.data;
  });
});
</script>

<template>
  <aside class="sidebar">
    <p class="aside__title">Поиск сотрудников</p>
    <input
        class="aside__input"
        type="search"
        placeholder="Anna"
    />
    <p class="aside__title">Результаты</p>
    <card-list :users="users" />
  </aside>
</template>

<style scoped>
.sidebar {
  min-height: 100%;
  width: 296px;
  border-right: 1px solid #DEDEDD;
  padding: 0 31px;
}
.aside__title {
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 600;
}
.aside__input {
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  padding: 15px 16px;
  margin: 22px 0;
}
</style>
