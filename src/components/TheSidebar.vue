<script setup>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const users = computed(() => store.getters['getUsers']);

const emits = defineEmits(['user-click']);
const handleUserClick = (userId) => {
  emits('user-click', userId);
};

const search = ref("");

const filteredUsers = computed(() => {
  const searchValues = prepareSearchValues(search.value);
  return users.value.filter(user => matchesSearchValues(user, searchValues));
});

// Вспомогательная функция для подготовки значений поиска
const prepareSearchValues = (searchValue) => {
  return searchValue.toLowerCase().trim().split(/[ ,]+/);
};

// Вспомогательная функция для проверки соответствия поисковым значениям
const matchesSearchValues = (user, searchValues) => {
  const username = user.username.toLowerCase().trim();
  const userId = user.id.toString();

  return searchValues.some(searchValue => {
    searchValue = searchValue.toLowerCase().trim()
    return (
        username.includes(searchValue) ||
        userId.includes(searchValue));
  });
};

onMounted(() => {
  store.dispatch('fetchUsers');
});
</script>

<template>
  <aside class="sidebar">
    <p class="aside__title">Поиск сотрудников</p>
    <input
        class="aside__input"
        type="search"
        placeholder="Anna"
        v-model="search"
    />
    <p class="aside__title">Результаты</p>
<!--    <card-list :users="users" />-->
    <div class="mb-18" v-for="user in filteredUsers" :key="user.id">
      <div class="card" @click="handleUserClick(user.id)">
        <img class="card__img" src="../assets/static/mock-photo.png" alt="PL">
        <div class="card__right">
          <p class="card__text__username">{{user.username}}</p>
          <small class="card__text__email">{{user.email}}</small>
        </div>
      </div>
    </div>
    <p class="warn" v-if="users.length === 0">ничего не найдено</p>
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
