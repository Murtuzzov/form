/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        labelColor: "rgb(29, 29, 29)", // Замените на ваш кастомный цвет
        // Вы можете добавить другие цвета, например:
        // secondary: '#4A90E2',
        // success: '#28A745',
      },
    },
  },
  plugins: [],
};
