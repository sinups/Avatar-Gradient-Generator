import { configurator } from './components/Randomizer/Configurator';
import { renderDemo } from './render-demo';

export default { title: 'Avatar' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(configurator),
};
