<template>
  <div id="app">
    <menu-bar></menu-bar>
    <get-movies></get-movies>
    <main-area></main-area>

  </div>
</template>

<script>
  import MenuBar from './components/MenuBar.vue';
  import MainArea from './components/MainArea.vue';
  import GetMovies from './components/GetActorDetails.vue';


  export default {
      name: 'App',
        components: {
          MenuBar,
          MainArea,
          GetMovies
    
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
