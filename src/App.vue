<template>
  <div id="app">
    <div class="wrapper">
      <transition-group name="fade">
        <Intro key="dynamic" class="animated" v-if="currentView != 2" />
        <div key="main-content" class="animated" >
          <Nav v-on:viewChangeTriggered="updateView($event)"/>
          <div id="content">
            <transition name="component-fade" mode="out-in">
              <component v-bind:is='currentViewComponent'></component>
            </transition>
          </div>
        </div>
      </transition-group>
      <Footer />
    </div>
  </div>
</template>

<script>
import About from './components/About';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    About,
    Projects,
    Resume,
    Intro,
    Nav,
    Footer,
  },
  data: function data() {
    return {
      currentView: 0,
      views: [About, Projects, Resume],
    };
  },
  computed: {
    currentViewComponent: function currentViewComponent() {
      return this.views[this.currentView];
    },
  },
  methods: {
    updateView: function updateView(val) {
      this.currentView = val;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
body {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
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
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
.wrapper span {
  width: 100%;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  margin-top: -350px;
}
.fade-enter-active,
.fade-leave-active {
  transition: margin-top 300ms ease-out;
}
.fade-enter-to,
.fade-leave {
  margin-top: 0px;
  opacity: 1
}
.animated {
  transition: all 300ms;
}
</style>
