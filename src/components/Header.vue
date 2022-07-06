<template>
  <header>
    <div class="glass-bg">
      <h1><span>Vue</span>Cep</h1>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.glass-bg {
  background: radial-gradient(
    97.57% 210.75% at 0.9% 2.98%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(42px);

  @apply w-full h-14 flex items-center justify-center;
}
header {
  @apply bg-green-700;
}
h1 {
  @apply uppercase text-2xl font-bold text-yellow-400;
}
span {
  @apply text-green-400;
}
</style>
