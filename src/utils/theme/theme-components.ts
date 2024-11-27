import { MantineThemeOverride } from '@mantine/core';

const components: MantineThemeOverride['components'] = {
  Button: {
    styles: {
      root: {
        borderRadius: 8,
      },
    },
  },
  Paper: {
    styles: {
      root: {
        padding: '16px',
        backgroundColor: '#FFFFFF',
      },
    },
  },
};

export default components;
