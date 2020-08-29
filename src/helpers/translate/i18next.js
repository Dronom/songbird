import i18n from 'i18next';

import translationEN from './en.json';
import translationRU from './ru.json';

const resources = {
  en: translationEN,
  ru: translationRU,
};

i18n.init({
  lng: 'en',
  resources,
});

export default i18n;
