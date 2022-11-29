import { getLocalStorage, setLocalStorage } from '@/storage/local/localStorage';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export const useLocaleStore = defineStore('config', () => {
  const localeStorageKey = 'locale';

  const locale = ref(getLocalStorage(localeStorageKey) || 'zh_CN');

  function setLocale(locale: string) {
    this.locale = locale;
    const i18n = useI18n();
    i18n.locale.value = locale;
    setLocalStorage(localeStorageKey, locale);
  }

  return { locale, setLocale };
});
