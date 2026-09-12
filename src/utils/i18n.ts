// i18n 工具函数
import zh from '~/i18n/zh.json';
import en from '~/i18n/en.json';

export type Locale = 'zh' | 'en';
export const defaultLocale: Locale = 'zh';
export const locales: Locale[] = ['zh', 'en'];

const translations = { zh, en };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // 回退到默认语言
      value = translations[defaultLocale];
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // 找不到翻译返回 key
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : key;
}

// 获取不带 locale 前缀的路径
export function getLocalePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) {
    return cleanPath;
  }
  return `/${locale}${cleanPath}`;
}

// 从 URL 解析 locale
export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return defaultLocale;
}
