<template>
  <div class="intro">
    <div class="hello">
      <img src="../assets/avatar.png"/>
      <h1>Hello! I'm Nick.</h1>
    </div>
    <div class="social">
      <ul>
        <li>
          <a href="mailto:nickbenrodriguez@gmail.com">
            <font-awesome-icon icon="envelope" />
          </a>
        </li>
        <li>
          <a href="https://github.com/endotnick">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/endot">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/endotnick">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/endotnick">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin: .3em 0;
}
ul {
  font-size: 1.5em;
}
img {
  border: 1px solid #d5d5d5;;
  border-radius: 15em;
  width: 200px;
  height: auto;
}
</style>
