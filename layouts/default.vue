<template>
  <Nuxt />
</template>

<style lang="scss">
:root {
  --color-main: #8a2387;
  --color-alt: #e94057;
  --color-light: #f27121;
}

html {
  font-family: 'noto-sans', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  scrollbar-color: $theme-color-1 #d1d1d1;
  scrollbar-width: auto;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
