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

    <user-detail
        :selected-user="selectedUser"
        :is-user-detail-open="isUserDetailOpen"
    />
  </div>
</template>

<style scoped lang="scss">
.mainScreen {
  display: flex;
  justify-content: space-between;

  background: #FDFDFD;
  padding: 30px;
  border-radius: 10px;

  min-height: 575px;
  height: 100%;
}
</style>
