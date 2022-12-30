<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: siyuan;
  src: url('./assets/font/SourceHanSansCN-Medium.otf');
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: 'siyuan';
}
.main {
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  width: 6px;
  background-color: rgba(204, 204, 204, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(204, 204, 204, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(204, 204, 204, 1);
}
</style>
