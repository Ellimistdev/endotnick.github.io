<template>
  <nav class="nav">
    <ul>
      <li><a href='#' v-on:click="setView(0)">About</a></li>
      <li><a href='#' v-on:click="setView(1)">Projects</a></li>
      <li><a href='#' v-on:click="setView(2)">Resume</a></li>
      <span><font-awesome-icon icon="arrow-left" /> This is all coming soon</span>
      <!--li><a href="/blog">Blog</a></li-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    setView: function setView(value) {
      this.$emit('viewChangeTriggered', value);
    },
  },
};
</script>

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
