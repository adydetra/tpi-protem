import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FutureCard from '@/components/app/FutureCard.vue';
import Future from '@/components/Future.vue';

describe('future', () => {
  it('renders section title and 4 future cards', () => {
    const wrapper = mount(Future);

    expect(wrapper.text()).toContain('Future of The Protem');

    const cards = wrapper.findAllComponents(FutureCard);
    expect(cards).toHaveLength(4);

    expect(cards[0].props('title')).toBe('Data Stored');
    expect(cards[1].props('title')).toBe('Fingerprint lock');
    expect(cards[2].props('title')).toBe('Innovative Idea');
    expect(cards[3].props('title')).toBe('Password Protect');
  });
});
