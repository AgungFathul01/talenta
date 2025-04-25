/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors based on the provided palette
        navy: {
          DEFAULT: "#192a3e",
          50: "#e9edf1",
          100: "#d3dbe3",
          200: "#a7b7c7",
          300: "#7b93ab",
          400: "#4f6f8f",
          500: "#2c6f9c",
          600: "#235a7d",
          700: "#1a435e",
          800: "#122d3e",
          900: "#09161f",
        },
        blue: {
          DEFAULT: "#2c6f9c",
          50: "#eaf4fa",
          100: "#d5e9f5",
          200: "#abd3eb",
          300: "#81bde1",
          400: "#57a7d7",
          500: "#2c6f9c",
          600: "#235a7d",
          700: "#1a435e",
          800: "#122d3e",
          900: "#09161f",
        },
        orange: {
          DEFAULT: "#fe8829",
          50: "#fff4eb",
          100: "#ffe9d7",
          200: "#ffd3af",
          300: "#ffbd87",
          400: "#ffa75f",
          500: "#fe8829",
          600: "#cb6d21",
          700: "#985219",
          800: "#663610",
          900: "#331b08",
        },
        offwhite: {
          DEFAULT: "#fefeff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
