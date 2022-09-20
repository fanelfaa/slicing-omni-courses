import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: { primary: '#0177fb' },
  fonts: {
    roboto: 'Roboto, sans-serif',
    inter: 'Inter, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Inter, sans-serif',
        bgColor: '#f5f5f7',
      },
      'a:hover': {
        border: 'none',
        cursor: 'pointer',
      },
    },
  },
});
