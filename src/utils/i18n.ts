// i18n 工具函数
import zh from '~/i18n/zh.json';
import en from '~/i18n/en.json';

export type Locale = 'zh' | 'en';
export const defaultLocale: Locale = 'zh';
export const locales: readonly Locale[] = ['zh', 'en'] as const;

type TranslationTree = typeof zh;
type NestedKey<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends string
    ? `${Prefix}${K}`
    : T[K] extends object
      ? NestedKey<T[K], `${Prefix}${K}.`>
      : never;
}[keyof T & string];

export type TranslationKey = NestedKey<TranslationTree>;

const translations: Record<Locale, TranslationTree> = { zh, en };

export function t(locale: Locale, key: TranslationKey | string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // 回退到默认语言
      let fallback: unknown = translations[defaultLocale];
      for (const fallbackKey of keys) {
        if (fallback && typeof fallback === 'object' && fallbackKey in fallback) {
          fallback = (fallback as Record<string, unknown>)[fallbackKey];
        } else {
          return key; // 找不到翻译返回 key
        }
      }
      return typeof fallback === 'string' ? fallback : key;
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
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') return 'en';
  return defaultLocale;
}
