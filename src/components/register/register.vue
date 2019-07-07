<template>
  <div class="row p-4">
    <div class="col-sm-4 col-12">
    </div>
    <div class="col-sm-4 col-12 justify-content-center div-opacity p-4">
      <form v-on:submit="register">
        <b-form-group
          id="input-group-1"
          label="Tipo de entidad"
          label-for="input-1"
          class="label-form"
        >
          <b-form-select
            id="input-1"
            v-model="registerData.type"
            type="email"
            required
            placeholder="Correo electronico"
          >
            <option value="restaurante" selected="true">Restaurante</option>
            <option value="fundacion">Fundacion</option>
          </b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Correo:"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.email"
            type="email"
            required
            placeholder="Correo electronico"
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
        <b-form-group
          id="input-group-1"
          label="Nombre de la entidad"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.name"
            type="text"
            required
            placeholder="Nombre de la entidad"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Direccion"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.address"
            type="text"
            required
            placeholder="Direccion de la entidad"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Telefono"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.phone"
            type="text"
            required
            placeholder="Telefono de la entidad"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Alimentos ( Que desea donar o recibir)"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.food"
            type="text"
            required
            placeholder="Ejemplo1, ejemplo2, ejemplo 3"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Horario de atencion"
          label-for="input-1"
          class="label-form"
        >
          <b-form-input
            id="input-1"
            v-model="registerData.schedule"
            type="text"
            required
            placeholder="Dias y horas disponibles"
          ></b-form-input>
        </b-form-group>
        <span>
          <b-button
            type="submit"
            variant="primary">Registrarse
          </b-button>
        </span>
        <span class="p-2">
          <b-button
            variant="outline-primary"
            to='/'>Volver
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
