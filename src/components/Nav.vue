<template>
  <nav class="nav">
    <ul>
      <li><a href='#' v-on:click="setState(0)">About</a></li>
      <li><a href='#' v-on:click="setState(1)">Resume</a></li>
      <li><a href='#' v-on:click="setState(2)">Projects</a></li>
      <span><font-awesome-icon icon="arrow-left" />This is all coming soon</span>
      <!--li><a href="/blog">Blog</a></li-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    setState: function setState(value) {
      this.$emit('stateChangeTriggered', value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  border-style: solid;
  border-color: #d5d5d5;
  border-width: 1px 0;
}
a {
  text-decoration: line-through;
}
</style>
