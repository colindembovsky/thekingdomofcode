module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
    './_posts/*.{html,md}',
    './src/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#fff',
            lineHeight: '1.75',
            letterSpacing: '0.01em',
            h1: {
              color: '#818CF8', // indigo-400
              fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui',
              fontSize: '2.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            },
            h2: {
              color: '#A5B4FC', // indigo-300
              fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui',
              fontSize: '2rem',
              fontWeight: '600',
              lineHeight: '1.3',
              marginTop: '2.5rem',
            },
            h3: {
              color: '#A5B4FC', // indigo-300
              fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '2rem',
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            a: {
              color: '#818CF8', // indigo-400
              textDecoration: 'none',
              '&:hover': {
                color: '#6366F1', // indigo-500
                textDecoration: 'underline',
              },
            },
            code: {
              color: '#C7D2FE', // indigo-200
              backgroundColor: 'rgba(99, 102, 241, 0.1)', // indigo-500 with opacity
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              fontSize: '0.875em',
            },
            pre: {
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              code: {
                backgroundColor: 'transparent',
                padding: '0',
                color: '#C7D2FE', // indigo-200
                fontSize: '0.875em',
              }
            },
            blockquote: {
              borderLeftColor: '#6366F1', // indigo-500
              color: '#A5B4FC', // indigo-300
              fontStyle: 'italic',
              backgroundColor: 'rgba(99, 102, 241, 0.1)', // indigo-500 with opacity
              padding: '1rem 1.5rem',
              borderRadius: '0.25rem',
            },
            ul: {
              listStyleType: 'disc',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.625rem',
            },
            ol: {
              listStyleType: 'decimal',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.625rem',
            },
            'ul > li': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'ol > li': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
