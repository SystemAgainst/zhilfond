<script setup>

</script>

<template>
  <div class="header">
    <span class="header__logo">Жилфонд</span>
    <span>Пользователь</span>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 26px;

  &__logo {
    font-size: 32px;
    font-weight: 700;
    color: var(--red-color);
  }
}
</style>
