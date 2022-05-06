<template>
  <div id="app">
    <router-view/>
    <menu-bar></menu-bar>
    <main-area></main-area>
    </div>
</template>

<script>
  import MenuBar from './components/MenuBar.vue';
  import MainArea from './components/MainArea.vue';
  export default {
      name: 'App',
        components: {
          MenuBar,
          MainArea,
    
        }
  }
</script>

<style>
/* Font import */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
body{
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
  min-height: 100vh;
}
h2 {
  color: white;
  font-size: 24px;
}
h3 {
  color: #FFE81F;
  font-size: 14px;
}
ul {
    list-style: none;
    margin: 0px;
}
li {
    margin: 10px 0px;
    font-size: 16px;
}
</style>