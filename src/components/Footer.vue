<template>
  <footer>
    <span>
      <font-awesome-icon icon="code" /> w/ <font-awesome-icon icon="heart" /> by <a href='https://github.com/endotnick/endotnick.github.io'>n.</a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  footer {
    font-family: 'Lobster', sans-serif;
    bottom: 1em;
    position: absolute;
    text-align: center;
    max-width: 800px;
    width: 100%;
  }
  a {
    color: rgb(255, 183, 77);
    text-decoration: none;
  }
</style>
