<template>
  <div class="add">
    <div class="add__text">Name:</div>
    <input
      class="add__input name__input"
      v-model="bmi.name"
      type="text"
      required
    />

    <div class="add__text">Height:</div>
    <input class="add__input" v-model="bmi.height" type="number" />

    <div class="add__text">Weight:</div>
    <input class="add__input" v-model="bmi.weight" type="number" />

    <button @click="addBmi" :disabled="!bmi.name" class="add__text add__btn">
      Add BMI
    </button>
  </div>
</template>

<script>
import BmiGateway from "../gateway/BmiGateway";

export default {
  data: () => ({
    bmi: {
      name: "",
      height: 0,
      weight: 0,
    },
  }),

  methods: {
    addBmi() {
      BmiGateway.addOne(this.bmi);

      this.bmi = {
        name: "",
        height: 0,
        weight: 0,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  flex-direction: column;
  max-width: 300px;

  &__input {
    height: 30px;
    margin-bottom: 20px;
  }

  &__text {
    margin-bottom: 5px;
    font-family: "Arial";
  }

  &__btn {
    background: green;
    border-radius: 5px;
    width: fit-content;
    padding: 10px 20px;
    color: white;
    margin: 0 auto;
  }
}
</style>
