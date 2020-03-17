import { mount } from '@vue/test-utils';
import HdcTest from './index.vue';
// eslint-disable-next-line no-undef
describe('index.vue', () => {
  // eslint-disable-next-line no-undef
  it('props', () => {
    const wrapper = mount(HdcTest, {
      propsData: {
        property: {
          data: {
            content: 'test'
          }
        }
      }
    });
    const divDom = wrapper.find('.hdc-test div');
    expect(divDom.text()).toEqual('test')
  })
})
