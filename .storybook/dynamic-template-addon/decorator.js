import addons, { makeDecorator } from '@storybook/addons';
import beautify from 'js-beautify';
import { EVENT_ID } from './register';

const withTemplate = makeDecorator({
  name: 'withTemplate',
  wrapper: (storyFn, context) => {
    const story = storyFn(context);
    const options = story.options.STORYBOOK_WRAPS.options;

    let { template, components } = options || null;

    const storyValues = story.options.STORYBOOK_VALUES;
    const componentName = Object.keys(components)[0];
    const componentInstance = components[componentName];
 
    for (let key in storyValues) {
      const defaultValue = componentInstance.props[key].default;
      const value = storyValues[key];
      const isDefaultValue = defaultValue === value;
      const isDynamicValue = typeof value === 'boolean' || typeof value === 'object';
      const result = isDefaultValue ? '' : `${isDynamicValue ? ':' : ''}${key}="${value}"`;

      const re = new RegExp(`:${key}="${key}"`, 'gi');
      template = template.replace(re, result);
    }

    template += `
      Add directive with your own data | v-model="data"
    `

    const channel = addons.getChannel();
    channel.emit(EVENT_ID, { markup: beautify.html(template, { indent_size: 2, wrap_attributes: 'force-expand-multiline'}) });

    return story
  },
});

export default withTemplate
