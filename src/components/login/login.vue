<template>
  <div class="row p-4">
    <div class="col-sm-4 col-12">
    </div>
    <div class="col-sm-4 col-12 justify-content-center login p-4">
      <form v-on:submit="login">
        <b-form-group
          id="input-group-1"
          label="Usuario:"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="loginData.username"
            type="text"
            required
            placeholder="Nombre de usuario"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Contraseña:"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="loginData.pass"
            type="text"
            required
            placeholder="Contraseña"
          ></b-form-input>
        </b-form-group>
        <span>
          <b-button
            type="submit"
            variant="primary">Ingresar
          </b-button>
        </span>
        <span class="p-2">
          <b-button
            variant="outline-primary"
            to='/register'>Registrarse
          </b-button>
        </span>
      </form>
    </div>
    <div class="col-sm-4 col-12">
    </div>
  </div>
</template>
<script src="./login.js"></script>
<style scoped src="./login.css"></style>
