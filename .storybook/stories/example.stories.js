import { text, boolean } from '@storybook/addon-knobs';

export default { title: 'DatePickers' };

import DatePicker from '../../src/components/DatePicker.vue';

export const Date = () => ({
  components: {
    DatePicker
  },
  props: {
    filled: {
      type: Boolean,
      default: boolean('Filled', true),
    },
    label: {
      type: String,
      default: text('Label', 'Date'),
    },
  },
  template: `
    <DatePicker
      :label="label"
      :filled="filled"
    />
  `,
});

export const Month = () => ({
  components: {
    DatePicker
  },
  props: {
    filled: {
      type: Boolean,
      default: boolean('Filled', true),
    },
    label: {
      type: String,
      default: text('Label', 'Month'),
    },
  },
  template: `
    <DatePicker
      type="month"
      :label="label"
      :filled="filled"
    />
  `,
});