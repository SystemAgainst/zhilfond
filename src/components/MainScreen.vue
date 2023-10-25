<script setup>
import TheSidebar from "./TheSidebar.vue";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import UserDetail from "./UserDetail.vue";

const store = useStore();
const selectedUser = computed(() => store.getters['selectedUser']);

const isUserDetailOpen = ref(false);

const handleUserClick = async (userId) => {
  await store.dispatch('selectUserById', userId);
  isUserDetailOpen.value = true;
};
</script>

<template>
  <div class="mainScreen">

    <the-sidebar @user-click="(userId) => handleUserClick(userId)" />

    <user-detail :selected-user="selectedUser" :is-user-detail-open="isUserDetailOpen" />
  </div>
</template>

<style scoped>
.mainScreen {
  display: flex;
  justify-content: space-between;

  background: #FDFDFD;
  padding: 30px;
  border-radius: 10px;

  min-height: 575px;
  height: 100%;
}
.display {
  width: 975px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;

  min-height: 100%;
}

.content {
  display: flex;
  text-align: left;
  height: 286px;
  font-size: 14px;
  line-height: 1.25;
}

.content__left {
  flex-shrink: 0;
  margin-right: 61px;
}
</style>
