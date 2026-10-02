import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TheHeader from '@/components/TheHeader.vue';

describe('theHeader', () => {
  it('renders navigation links and toggle mobile menu', async () => {
    const wrapper = mount(TheHeader);

    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).toContain('Features');
    expect(wrapper.text()).toContain('Collection');
    expect(wrapper.text()).toContain('Contact');
    expect(wrapper.text()).toContain('Sign Up');

    const navList = wrapper.find('ul');
    expect(navList.classes()).toContain('hidden');

    const toggleButton = wrapper.find('button[type="button"]');
    await toggleButton.trigger('click');

    expect(navList.classes()).toContain('flex');
    expect(navList.classes()).not.toContain('hidden');
  });
});
