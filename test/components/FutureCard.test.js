import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FutureCard from '@/components/app/FutureCard.vue';

describe('futureCard', () => {
  it('renders title, description and icon correctly', () => {
    const wrapper = mount(FutureCard, {
      props: {
        title: 'Data Stored',
        icon: '1',
        desc: 'Safe and encrypted data storage system.',
      },
    });

    expect(wrapper.text()).toContain('Data Stored');
    expect(wrapper.text()).toContain('Safe and encrypted data storage system.');

    const images = wrapper.findAll('img');
    expect(images.length).toBeGreaterThanOrEqual(1);
    expect(images[0].attributes('src')).toBe('/future-icon-1.svg');
    expect(images[0].attributes('alt')).toBe('Data Stored');
  });
});
