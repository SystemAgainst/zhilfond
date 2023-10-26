<script setup>
const props = defineProps({
  selectedUser: {
    type: null,
    required: true,
  },
  isUserDetailOpen: Boolean,
});
</script>

<template>
  <div class="display">
    <div class="content" v-if="isUserDetailOpen">
      <div class="content__left">
        <img src="../assets/static/mock-photo.png" alt="photo">
      </div>
      <div class="content__right">
        <div class="content__username">{{ selectedUser.username }}</div>
        <p><strong>email:</strong> {{ selectedUser.email }}</p>
        <p><strong>phone:</strong> {{ selectedUser.phone }}</p>
        <p><strong>О себе:</strong></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quibusdam, tempore. A alias amet architecto
          atque beatae commodi, dignissimos ea eaque error et in laboriosam magnam maiores minus natus necessitatibus
          nemo officia omnis perspiciatis, possimus praesentium provident sequi sint sit temporibus tenetur unde
          vitae! A accusantium dolor dolorem ducimus eius expedita laborum.
        </p>
      </div>
    </div>

    <p class="warn" v-else>
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
  </div>
</template>

<style scoped lang="scss">
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

  &__left {
    flex-shrink: 0;
    margin-right: 61px;
  }

  &__username {
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>
