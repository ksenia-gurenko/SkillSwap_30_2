import type { Preview } from '@storybook/react-vite';
import '../src/fonts/font.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'todo'
    },
    layout: 'fullscreen',
  }
};

export default preview;