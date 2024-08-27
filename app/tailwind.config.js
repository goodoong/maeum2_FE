/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/components/**/*/*.{js,jsx,ts,tsx}",
        "./src/screens/*.{js,jsx,ts,tsx}",
      ],
    theme: {
      extend: {
        colors: {
          headline: "#00473e",
        //   본문
          darkblack: "#090a0a",
          darkgray: "#475d5b",
        //   버튼
          buttontext: "#00332c",
          buttonyellow: "#faae2b",
          buttonpink: "#ffa8ba",
        //   배경 
          bggreen: "#f2f7f5",
        //   밝은 회색 
          subtitle : "#c0d6c0",
        },
      },
    },
    plugins: [],
  };