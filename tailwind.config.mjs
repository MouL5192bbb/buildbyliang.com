/** @type {import('tailwindcss').Config} */
// 极简黑白视觉系统 + 亮绿点缀 (#00dc82)
// 参考 leerob.io 风格：白底黑字 + 一个高亮色
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 主色系统
        accent: {
          DEFAULT: '#00dc82', // 亮绿点缀色
          dark: '#00b86b', // 暗模式下的点缀色
        },
        // 中性色（黑白灰）
        ink: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SF Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        // 优化阅读体验的字号
        'base': ['1rem', { lineHeight: '1.75' }],
        'lg': ['1.125rem', { lineHeight: '1.75' }],
        'xl': ['1.25rem', { lineHeight: '1.75' }],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(23 23 23)',
            a: {
              color: 'rgb(23 23 23)',
              textDecoration: 'underline',
              textDecorationColor: 'rgb(0 220 130)',
              textUnderlineOffset: '3px',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(0 220 130)',
              },
            },
            'h2, h3, h4': {
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            h2: { fontSize: '1.875rem', marginTop: '3rem', marginBottom: '1.25rem' },
            h3: { fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' },
            h4: { fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem' },
            p: { marginTop: '1.25rem', marginBottom: '1.25rem' },
            ul: { marginTop: '1.25rem', marginBottom: '1.25rem' },
            ol: { marginTop: '1.25rem', marginBottom: '1.25rem' },
            li: { marginTop: '0.5rem', marginBottom: '0.5rem' },
            code: {
              fontWeight: '500',
              background: 'rgb(245 245 245)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: {
              background: 'rgb(245 245 245)',
              borderRadius: '0.5rem',
              padding: '1rem',
              border: '1px solid rgb(229 229 229)',
              fontSize: '0.875rem',
            },
            'pre code': {
              background: 'transparent',
              padding: '0',
              borderRadius: '0',
            },
            blockquote: {
              borderLeftColor: 'rgb(0 220 130)',
              borderLeftWidth: '3px',
              fontStyle: 'normal',
              color: 'rgb(64 64 64)',
            },
            hr: {
              borderColor: 'rgb(229 229 229)',
              marginTop: '3rem',
              marginBottom: '3rem',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [typography],
};
