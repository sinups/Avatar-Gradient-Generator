import { MantineProvider } from '@mantine/core';

import Demo from './demo';
import { theme } from './theme';

import '@mantine/core/styles.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}
