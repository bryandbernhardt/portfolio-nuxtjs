import es from './es-AR.json';
import pt from './pt-br.json';
import en from './en-US.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    pt,
    es
  }
}))