import { configure, addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { withTemplate } from '~storybook/dynamic-template-addon'
import { withVuetify } from '~storybook/addon-vuetify'

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withTemplate)
addDecorator(withVuetify)

configure(require.context('./stories', true, /\.stories\.js$/), module)
