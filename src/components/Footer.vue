<template>
  <footer>
    <p>
      <span>Developed by </span
      ><a href="https://github.com/SouEuMarlon" target="_blank">Marlon Menezes</a>
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  @apply bg-green-700 w-full h-14 flex items-center justify-center;
}
p {
  @apply uppercase text-base font-bold text-white;
}
span {
  @apply text-white;
}

a {
  @apply underline;
}
</style>
