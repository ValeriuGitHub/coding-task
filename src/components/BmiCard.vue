<template>
  <div class="bmi__card" :class="{ highlight: votes >= 10 }">
    <div class="bmi__text bmi__name">{{ bmi.name }}</div>
    <div class="bmi__text bmi__height">Height: {{ bmi.height }}</div>
    <div class="bmi__text bmi__width">Width: {{ bmi.weight }}</div>

    <div class="bmi__text bmi__counter" @click="votes++">Vote: {{ votes }}</div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import { IBmi } from "@/interfaces";

export default defineComponent({
  props: {
    bmi: {
      type: Object as PropType<IBmi>,
      required: true,
    },
  },

  watch: {
    votes() {
      if (this.votes >= 10) this.votes = 10;
    },
  },

  data: () => ({
    votes: 0,
  }),
});
</script>

<style lang="scss" scoped>
.bmi {
  &__card {
    width: 100%;
    flex-grow: 1;
    background: #fff;
    width: calc(100% * (1 / 4) - 62px);
    margin: 10px;
    transition: background 0.3s ease-out;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 20px;
  }

  &__counter {
    width: fit-content;
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    padding: 5px 10px;
    background: pink;
    border-radius: 5px;
    color: white;
    transition: 0.3s ease-out;
  }
  &__counter:hover {
    opacity: 0.8;
  }

  &__name {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  &__text {
    font-family: "Arial";
  }
}

.highlight {
  background: cornflowerblue;
  color: white;
}
</style>
