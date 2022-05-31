<template>
  <div class="bmi-list">
    <BmiCard v-for="bmi in sortBmiByHighest()" :key="bmi.id" :bmi="bmi" />
  </div>
</template>
<script>
import BmiCard from "./BmiCard.vue";

import { IBmi } from "@/interfaces";

import BmiGateway from "../gateway/BmiGateway";

export default {
  name: "bmi-list",

  components: {
    BmiCard,
  },

  data: () => ({
    bmis: [],
  }),

  async mounted() {
    this.bmis = await BmiGateway.getAll();
  },

  methods: {
    sortBmiByHighest() {
      const calculateBmi = (bmi) => bmi.weight / Math.sqrt(bmi.height);

      return this.bmis.sort(
        (firstBmi, secondBmi) =>
          calculateBmi(secondBmi) - calculateBmi(firstBmi)
      );
    },
  },
};
</script>
<style>
.bmi-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;
}
</style>
