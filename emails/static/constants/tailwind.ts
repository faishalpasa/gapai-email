export const CONFIG = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          '50': '#edfcf6',
          '100': '#d4f7e7',
          '150': '#adedd5',
          '200': '#78ddbc',
          '300': '#41c69e',
          '400': '#1eab86',
          '500': '#118a6d',
          '600': '#0f7e63',
          '700': '#0e6e5a',
          '800': '#094c3c',
          '900': '#073a2e',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          [`text-color`]: '#637381'
        },
        secondary: {
          '50': '#fff9eb',
          '100': '#ffeec6',
          '200': '#ffe3a7',
          '300': '#fede89',
          '400': '#fece65',
          '500': '#fec23f',
          '600': '#feae21',
          '700': '#f88c08',
          '800': '#db6604',
          '900': '#984601',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        gray: {
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#dee2e6',
          '400': '#ced4da',
          '500': '#a9b5c0',
          '600': '#8c9dac',
          '700': '#637381',
          '800': '#586773',
          '900': '#4f5a63'
        },
        slate: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a'
        },
        neutral: {
          '50': '#FEFEFE',
          '100': '#FCFCFC',
          '200': '#FAFBFD',
          '300': '#f8f8f8',
          '400': '#f7f7f7',
          '500': '#f5f5f5',
          '600': '#dfdfdf',
          '700': '#aeaeae',
          '800': '#878787',
          '900': '#000000'
        },
        blue: {
          '50': '#EFF6FF',
          '100': '#c3cef6',
          '200': '#adbcf2',
          '300': '#8099ec',
          '400': '#5475e5',
          '500': '#2d68f8',
          '600': '#2757cd',
          '700': '#1c3fb7',
          '800': '#102a81',
          '900': '#08184f'
        },
        dark: {
          '50': '#e5e7eb',
          '100': '#d1d5db',
          '200': '#9ca3af',
          '300': '#6b7280',
          '400': '#4b5563',
          '500': '#374151',
          '600': '#1f2937',
          '700': '#111928',
          '800': '#080c14',
          '900': '#060a10'
        },
        danger: {
          '50': '#fef3f3',
          '100': '#feebeb',
          '200': '#fdd8d8',
          '300': '#fbc0c0',
          '400': '#f89090',
          '500': '#f56060',
          '600': '#f23030',
          '700': '#e10e0e',
          '800': '#b50c0c',
          '900': '#7a0606'
        },
        warning: {
          '50': '#fdf5e6',
          '100': '#f9e0b1',
          '200': '#f7d18b',
          '300': '#f3bb55',
          '400': '#f1ae35',
          '500': '#ed9a02',
          '600': '#d88c02',
          '700': '#a86d01',
          '800': '#825501',
          '900': '#644101'
        },
        info: {
          '50': '#e6f2fa',
          '100': '#b0d7f1',
          '200': '#8ac3ea',
          '300': '#54a8e0',
          '400': '#3397da',
          '500': '#007dd1',
          '600': '#0072be',
          '700': '#005994',
          '800': '#004573',
          '900': '#003558'
        },
        success: {
          '50': '#edf7e9',
          '100': '#c6e6bc',
          '200': '#aada9b',
          '300': '#83c96e',
          '400': '#6bbf51',
          '500': '#46af26',
          '600': '#409f23',
          '700': '#327c1b',
          '800': '#276015',
          '900': '#1d4a10'
        },
        red: {
          '50': '#fef3f3',
          '100': '#feebeb',
          '200': '#fdd8d8',
          '300': '#fbc0c0',
          '400': '#f89090',
          '500': '#f56060',
          '600': '#f23030',
          '700': '#e10e0e',
          '800': '#b50c0c',
          '900': '#7a0606'
        },
        purple: {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8646f4',
          '600': '#6d28d9',
          '700': '#5b21b6'
        },
        pink: {
          '50': '#fcf1fe',
          '100': '#f6d8fe',
          '200': '#eaa7fc',
          '300': '#df76fa',
          '400': '#d345f8',
          '500': '#c814f6'
        },
        teal: {
          '50': '#c2f5e9',
          '100': '#72ddc3',
          '200': '#20d9d2',
          '300': '#02aaa4',
          '400': '#06a09b'
        },
        cyan: {
          '50': '#d0f0fd',
          '100': '#77d1f3',
          '200': '#18bfff',
          '300': '#01a9db',
          '400': '#0b76b7'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        menu: '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
        xs: '0px 1px 3px 0px #A6AFC366',
        sm: '0px 4px 12px 0px #0D0A2C0F',
        md: '0px 5px 12px 0px #0000001A',
        lg: '0px 12px 34px 0px #0D0A2C14, 0px 34px 26px 0px #0D0A2C0D',
        xl: '0px 10px 15px 0px #050D1D2E',
        xxl: '0px 20px 20px 0px #050D1D33'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      },
      fontSize: {
        '3xs': '8px',
        '2xs': '10px',
        xs: '12px'
      }
    }
  }
};
