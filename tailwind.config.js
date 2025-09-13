/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // gray-50
        ring: "var(--color-ring)", // deep-forest-green
        background: "var(--color-background)", // warm-white
        foreground: "var(--color-foreground)", // rich-black
        primary: {
          DEFAULT: "var(--color-primary)", // deep-forest-green
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // warm-earth-brown
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-100
          foreground: "var(--color-muted-foreground)", // gray-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // golden-harvest
          foreground: "var(--color-accent-foreground)", // rich-black
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // rich-black
        },
        card: {
          DEFAULT: "var(--color-card)", // gray-50
          foreground: "var(--color-card-foreground)", // rich-black
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-600
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-600
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
        earth: {
          DEFAULT: "var(--color-earth)", // warm-earth-brown
          foreground: "var(--color-earth-foreground)", // white
        },
        harvest: {
          DEFAULT: "var(--color-harvest)", // golden-harvest
          foreground: "var(--color-harvest-foreground)", // rich-black
        },
        trust: {
          DEFAULT: "var(--color-trust)", // sky-blue
          foreground: "var(--color-trust-foreground)", // rich-black
        },
        conversion: {
          DEFAULT: "var(--color-conversion)", // harvest-orange
          foreground: "var(--color-conversion-foreground)", // white
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        organic: "4px",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '13': '3.25rem', // 52px - golden ratio
        '21': '5.25rem', // 84px - golden ratio
        '34': '8.5rem',  // 136px - golden ratio
        '55': '13.75rem', // 220px - golden ratio
      },
      boxShadow: {
        'organic': '0 4px 20px rgba(45, 90, 39, 0.1)',
        'harvest': '0 0 20px rgba(244, 164, 96, 0.3)',
        'earth': '0 2px 10px rgba(139, 69, 19, 0.15)',
      },
      animation: {
        'grow': 'grow 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'harvest-pulse': 'harvest-pulse 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        'harvest-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'earth-texture': 'radial-gradient(circle at 50% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)',
        'harvest-gradient': 'linear-gradient(135deg, var(--color-harvest) 0%, var(--color-accent) 100%)',
        'primary-gradient': 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
      },
      clipPath: {
        'organic': 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
        'field': 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      gridTemplateAreas: {
        'organic': '"header header header" "sidebar main aside" "footer footer footer"',
        'farm': '"hero hero hero" "story data impact" "cta cta cta"',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-organic': {
          clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
        },
        '.clip-field': {
          clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
        },
        '.grid-organic': {
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: '1.3125rem', // 21px
        },
        '.spacing-organic': {
          margin: '0.5rem 0.8125rem 1.3125rem 2.125rem', // 8px 13px 21px 34px
        },
        '.text-shadow-organic': {
          textShadow: '0 2px 4px rgba(45, 90, 39, 0.1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}