<template>
  <div>
     <p>Resume view rendered</p>
     <pdf src="https://github.com/endotnick/endotnick.github.io/raw/development/src/assets/NickRodriguezResume_public.pdf" :page=1></pdf>
  </div>
</template>

<script>
import pdf from 'pdfvuer';

export default {
  name: 'Resume',

  components: {
    pdf,
  },
};
</script>

<style scoped>
</style>
