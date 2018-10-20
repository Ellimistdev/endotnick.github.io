<template>
  <div id="app">
    <Intro/>
    <Nav/>
    <Content/>
  </div>
</template>

<script>
import About from './components/About.vue'
import Intro from './components/Intro.vue'
import Nav from './components/Nav.vue'
import Projects from './components/Projects.vue'
import Resume from './components/Resume.vue'

export default {
  name: 'app',
  components: {
    About,
    Intro,
    Nav,
    Projects,
    Resume
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
body {  
  max-width: 800px;
  margin: 0 auto;
}
ul {
  font-family:'Helvetica', 'Arial', 'Sans-Serif';
  padding: 0px;
  list-style: none;
  font-weight: bold;
}
li {
  display: inline;
  margin-right: 20px;
}
a {
  text-decoration: none;
  color: #999;
}
a:hover {
  text-decoration: underline;
  color: rgb(88, 88, 88);
}
h1 {
  font-size: 3em;
  font-family:'Helvetica', 'Arial', 'Sans-Serif';
}
p {
    font-size: 1.5em;
    line-height: 1.4em;
    color: #333;
}
</style>
