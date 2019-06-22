<template>
  <div class="row p-4">
    <div class="col-sm-4 col-12">
    </div>
    <div class="col-sm-4 col-12 justify-content-center div-opacity p-4">
      <form v-on:submit="register">
        <b-form-group
          id="input-group-1"
          label="Usuario:"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.username"
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
            v-model="registerData.pass"
            type="password"
            required
            placeholder="Contraseña"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Repetir Contraseña:"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.passAgain"
            type="password"
            required
            placeholder="Contraseña"
          ></b-form-input>
        </b-form-group>
        <span>
          <b-button
            type="submit"
            variant="primary">Registrarse
          </b-button>
        </span>
      </form>
    </div>
    <div class="col-sm-4 col-12">
    </div>
  </div>
</template>
<script src="./register.js"></script>
<style scoped src="./register.css"></style>
