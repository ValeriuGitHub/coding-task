import { mount } from "@vue/test-utils";
import BmiCard from "@/components/BmiCard.vue";
import AddBmi from "@/components/AddBmi.vue";

describe("BmiCard.vue", () => {
  test("User can vote", async () => {
    const wrapper = mount(BmiCard, {
      propsData: {
        bmi: {
          name: "test #1",
          height: 200,
          width: 170,
        },
      },
    });

    await wrapper.find(".bmi__counter").trigger("click");

    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });

  test("User can submit data", async () => {
    const wrapper = mount(AddBmi);

    console.log(wrapper);

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
