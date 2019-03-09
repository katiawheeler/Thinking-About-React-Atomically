import theme from 'mdx-deck/themes';
import colors from './colors';
import { Provider } from './Provider';

export default {
  //extend default theme
  ...theme,
  Provider,
  blockquote: {
    borderLeft: `4px solid ${colors.primary}`,
    paddingLeft: '50px',
    margin: '50px',
    fontSize: '1em',
    fontStyle: 'italic',
    fontWeight: 200,
  },
  transitionDuration: 0,
  li: {
    fontSize: '1em',
    ul: {
      fontSize: '1.5em'
    },
    marginBottom: '10px'
  },
  font: 'Roboto, sans-serif',
  colors: {
    text: '#fff',
    background: colors.black,
    link: colors.primary,
  },
  p: {
    strong: {
      color: colors.primary,
    },
    fontSize: '2em',
  },
  h1: {
    fontSize: '3em',
    marginBottom: '15px',
    strong: {
      color: colors.primary,
    },
  },
  h2: {
    fontSize: '2.75em',
    strong: {
      color: colors.primary,
    },
  },
  h3: {
    fontSize: '2em',
    margin: 0,
    strong: {
      color: colors.primary,
    },
  },
  code: {
    padding: '10px 20px',
    fontSize: '.75em',
    background: '#000',
    color: colors.primary,
  }
};
