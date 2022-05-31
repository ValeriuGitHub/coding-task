<template>
  <div class="wrap">
    <div class="navbar">
      <div class="wrap__title">Coding Task</div>
      <div class="navigation">
        <div class="navigation-item">
          <router-link to="/list" class="navigation-link">BMI list</router-link>
        </div>
        <div class="navigation-item">
          <router-link to="/add" class="navigation-link">Add BMI</router-link>
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style lang="scss" scoped>
.wrap {
  padding: 20px 40px;

  &__title {
    font-size: 24px;
    font-weight: bold;
    font-family: "Arial";
    color: purple;
    margin-bottom: 20px;
  }
}

.navigation {
  display: flex;

  &-item {
    margin-right: 20px;
    font-weight: 16px;

    padding: 10px;
    background: blue;
    border-radius: 5px;
  }

  &-link {
    color: white;
    text-decoration: none;
    font-family: "Arial";
    transition: 0.3s ease-out;

    &:hover {
      opacity: 0.8;
    }
  }
}

.navbar {
  margin-bottom: 20px;
}
</style>
