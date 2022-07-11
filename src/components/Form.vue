<template>
  <main>
    <form class="form_wrapper">
      <div class="input_container">
        <input
          type="tipo"
          name="cep"
          placeholder=" "
          class="input_default"
          id="cep"
          maxlength="8"
          v-model="cep"
          @keyup="getCep()"
        />
        <label for="cep" class="label_default">Digite o cep desejado...</label>
      </div>
    </form>

    <div class="error" v-show="showError">
      <h2>CEP não localizado!</h2>
    </div>

    <div class="container_response">
      <table>
        <tr>
          <th>CEP</th>
          <td>
            <p v-if="hasContent">{{ response.cep }}</p>
          </td>
        </tr>
        <tr>
          <th>Logradouro</th>
          <td>
            <p v-if="hasContent">{{ response.logradouro }}</p>
          </td>
        </tr>
        <tr>
          <th>Bairro</th>
          <td>
            <p v-if="hasContent">{{ response.bairro }}</p>
          </td>
        </tr>
        <tr>
          <th>Complemento</th>
          <td>
            <p v-if="hasContent">{{ response.complemento }}</p>
          </td>
        </tr>
        <tr>
          <th>Cidade</th>
          <td>
            <p v-if="hasContent">{{ response.localidade }}</p>
          </td>
        </tr>
        <tr>
          <th>Estado</th>
          <td>
            <p v-if="hasContent">{{ response.uf }}</p>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cep: "",
      response: null,
      baseUrl: "https://viacep.com.br/ws/",
      showError: false,
    };
  },

  computed: {
    hasContent() {
      return this.response !== null;
    },
  },

  methods: {
    getCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (this.cep.length === 8) {
        axios
          .get(`${this.baseUrl}${cep}/json/`)
          .then((response) => {
            if (response.data.erro) {
              this.showError = true;
            } else {
              this.showError = false;
              this.response = response.data;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (this.cep.length !== 8 || this.cep === "") {
        this.response = null;
        this.showError = false;
      }
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
  @apply max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden p-6;
}

.input_container {
  @apply relative border-b-2 focus-within:border-blue-500;
}

.input_default {
  @apply block w-full appearance-none focus:outline-none bg-transparent;
}

.label_default {
  @apply absolute top-0 -z-1 duration-300 origin-0 uppercase text-gray-500;
}

.container_response {
  @apply flex justify-center max-w-5xl mx-auto m-12 px-4;
}

.container_response tr {
  @apply bg-gray-100 border-solid border-2 border-gray-200;
}
.container_response tr th {
  @apply bg-gray-100 border-solid border-2 border-gray-200 w-44 text-center py-2;
}
.container_response tr td {
  @apply bg-white border-solid border-2 border-gray-200 w-64 text-center;
}

.error {
  @apply bg-red-50 border-solid border-2 border-red-300 flex justify-center max-w-lg mx-auto my-6 uppercase font-bold text-red-600 p-2;
}

@media screen and (max-width: 768px) {
  .form_wrapper {
    @apply max-w-xl mx-auto;
  }
}
@media screen and (max-width: 480px) {
  .form_wrapper {
    @apply max-w-xl mx-5;
  }

  .error {
    @apply mx-4;
  }
}
</style>
