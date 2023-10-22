<script setup>
import TheSidebar from "./TheSidebar.vue";
</script>

<template>
  <div class="mainScreen">
    <the-sidebar />

    <div class="display">
      <p class="warn">
        Выберите сотрудника, чтобы посмотреть его профиль
      </p>
    </div>
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
  width: 970px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;

  min-height: 100%;
}
</style>
