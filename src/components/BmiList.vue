<template>
  <div class="bmi">
    <ItemOfBmi v-for="bmi in sortBmiByHeight()" :key="bmi.id" :bmi="bmi" />
  </div>
</template>
<script>
import ItemOfBmi from "./ItemOfBmi.vue";

import BmiService from "../services/BmiService";

export default {
  name: "bmi-list",

  components: {
    ItemOfBmi,
  },

  data: () => ({
    bmis: [],
  }),

  async mounted() {
    this.bmis = await BmiService.getAll();
  },

  methods: {
    sortBmiByHeight() {
      return this.bmis.sort((firstBmi, secondBmi) => {
        firstBmi.height - secondBmi.height;
      });
    },
  },
};
</script>
<style>
.bmi {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;
}
</style>
