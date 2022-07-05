<template>
  <form class="form_wrapper">
    <div class="input_container">
      <input
        type="text"
        name="cep"
        placeholder=" "
        class="input_default"
        pattern="[\d]{5}-?[\d]{3}"
      />
      <label for="cep" class="label_default">Digite o cep desejado...</label>
    </div>

    <div class="input_container">
      <input
        type="text"
        name="logradouro"
        placeholder=" "
        class="input_default"
      />
      <label for="logradouro" class="label_default">Logradouro</label>
    </div>
    <div class="input_container">
      <input type="text" name="cidade" placeholder=" " class="input_default" />
      <label for="cidade" class="label_default">Cidade</label>
    </div>
    <div class="input_container">
      <input type="text" name="estado" placeholder=" " class="input_default" />
      <label for="estado" class="label_default">Estado</label>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cep: "",
    };
  },
  methods: {
    getCep() {
      this.$http
        .get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then((response) => {
          console.log(response.body);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-6;
}

input:focus-within ~ label {
  @apply text-blue-300;
}

.form_wrapper {
  @apply max-w-lg mx-auto mt-32 rounded-lg shadow-xl overflow-hidden p-6 space-y-10;
}

.input_container {
  @apply relative border-b-2 focus-within:border-blue-500;
}

.input_default {
  @apply block w-full appearance-none focus:outline-none bg-transparent;
}

.label_default {
  @apply absolute top-0 -z-1 duration-300 origin-0;
}

@media screen and (max-width: 768px) {
  .form_wrapper {
    @apply max-w-xl mx-auto mt-10;
  }
}
@media screen and (max-width: 480px) {
  .form_wrapper {
    @apply max-w-xl mx-5 mt-10;
  }
}
</style>
