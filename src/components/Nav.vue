<template>
  <nav class="nav">
    <ul>
      <li><a href="/">About</a></li>
      <li><a href="/resume">Resume</a></li>
      <li><a href="/projects">Projects</a></li>
      <!--li><a href="/blog">Blog</a></li-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  border-style: solid;
  border-color: #d5d5d5;
  border-width: 1px 0;
}
</style>
