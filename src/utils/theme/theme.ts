import { MantineThemeOverride } from '@mantine/core';
import components from './theme-components';

const customTheme: MantineThemeOverride = {
  fontFamily: 'Arial, sans-serif',
  headings: {
    fontFamily: 'Arial, sans-serif',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '61px', lineHeight: '1.25' },
      h2: { fontSize: '49px', lineHeight: '1.25' },
      h3: { fontSize: '39px', lineHeight: '1.25' },
      h4: { fontSize: '31px', lineHeight: '1.25' },
      h5: { fontSize: '25px', lineHeight: '1.5' },
      h6: { fontSize: '20px', lineHeight: '1.5' },
    },
  },
  colors: {
    primary: [
      '#E7F3FA', '#CDE8F7', '#A9D9F2', '#82C8EB', '#4FAEE3', '#1976D2', '#0F5EA5', '#093F78', '#062B52', '#041C39',
    ],
    secondary: [
      '#FDECE2', '#FBD6C7', '#F9B89B', '#F59169', '#F06A37', '#E74800', '#B43A00', '#862B00', '#5A1D00', '#3C1300',
    ],
    dark: [
      '#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#455A64', '#37474F', '#263238', '#1C1F21',
    ],
    light: [
      '#FFFFFF', '#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#CCCCCC', '#B3B3B3', '#999999', '#666666', '#333333',
    ],
  },
  primaryColor: 'primary',
  defaultRadius: 8,
  components,
  fontSizes: {
    h1: '61px',
    h2: '49px',
    h3: '39px',
    h4: '31px',
    h5: '25px',
    title1: '20px',
    title2: '18px',
    title3: '16px',
    body: '13px',
    caption: '10px',
  },
  lineHeights: {
    h1: '1.25',
    h2: '1.25',
    h3: '1.25',
    h4: '1.25',
    h5: '1.5',
    title1: '1.5',
    title2: '1.5',
    title3: '1.5',
    body: '1.5',
    caption: '1.25',
  },
  breakpoints: {
    xs: '480',
    sm: '768',
    md: '1024',
    lg: '1200', 
    xl: '1440', 
  },
  spacing: {
    xs: '4',
    sm: '8',
    md: '16',
    lg: '32', 
    xl: '64',
  },
};

export default customTheme;
