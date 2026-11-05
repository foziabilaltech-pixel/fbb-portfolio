/** @type {import('tailwindcss').Config} */

/*
  Tailwind CSS v3 configuration.
  All custom design tokens from the original style.css are defined here so
  the React version looks EXACTLY like the HTML version.

  NOTE: `screens` is overridden (not extended) so the breakpoints match the
  original CSS media queries exactly: 1200px, 768px, 480px, 320px.
  Tailwind is mobile-first, so:
    base  = 0px   -> 320px rules from the original
    sm    = 480px
    md    = 768px
    xl    = 1200px
*/
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      xl: '1200px',
    },
    extend: {
      colors: {
        // Exact colors from the original :root CSS variables
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
        'accent-primary': '#00d4ff',
        'accent-secondary': '#0099cc',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        // Exact accent gradient from the original
        'accent-gradient': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, #00bfea 0%, #0088bb 100%)',
      },
      borderRadius: {
        pill: '50px', // original --border-radius-pill
      },
      boxShadow: {
        glow: '0 0 60px rgba(0, 212, 255, 0.15)', // original --shadow-glow
        card: '0 20px 40px rgba(0, 0, 0, 0.3)', // original --shadow-card
        hover: '0 30px 60px rgba(0, 0, 0, 0.4)', // original --shadow-hover
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // original --transition-smooth
        spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // original --transition-spring
      },
      keyframes: {
        // Every keyframe from the original style.css, preserved 1:1
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatCard: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatCard: 'floatCard 4s ease-in-out infinite',
        blink: 'blink 1s infinite',
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        fadeInScale: 'fadeInScale 1s ease forwards',
      },
    },
  },
  plugins: [],
};