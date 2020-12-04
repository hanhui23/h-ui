import { shallowMount } from "@vue/test-utils";
import { defineComponent, h } from 'vue';
const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    return () => {
      return h('div', props.msg)
    }
  }
})
describe("HelloWorld.vue", () => {
  beforeEach(() => {
    console.log('before each')
  })
  afterEach(() => {
    console.log('after each')
  })
  beforeAll(() => {
    console.log('before All')
  })
  afterAll(() => {
    console.log('after All')
  })
  it("renders props.msg when passed", async() => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    await wrapper.setProps({
      msg: '123'
    })
    expect(wrapper.text()).toEqual(msg);
  })
});
