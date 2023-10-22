<script setup>
const props = defineProps({
  users: Array
})
</script>

<template>
  <div class="mb-18" v-for="user in users" :key="user.id">
    <div class="card">
      <img class="card__img" src="../assets/static/mock-photo.png" alt="PL">
      <div class="card__right">
        <p class="card__text__username">{{user.username}}</p>
        <small class="card__text__email">{{user.email}}</small>
      </div>
    </div>
  </div>
  <span class="warn" v-if="users.length <= 0">ничего не найдено</span>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
}
.card:hover {
  background-color: #76787D;
  transition: .3s background-color ease-in;
  cursor: pointer;
}
.card__img {
  height: 70px;
  width: 70px;
  border-right: 1px solid #E0E0E0;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  background-color: white;
  object-fit: cover;
}
.card__right {
  display: block;
  padding: 15px;
  font-size: 14px;
  line-height: .5;
}
.card__text__username {
  font-weight: 700;
}
.mb-18 {
  margin-bottom: 18px;
}
</style>
