<template>
    <div >
      <!-- Contact Section -->
      <section class="page-section p-4" id="contact">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Alimentos</h2>
              <hr class="divider my-4">
              <p class="text-muted mb-5">
                Gestiona los alimentos que maneja tu entidad
              </p>
            </div>
          </div>
          <div class="row text-center title">
            <div class="col-md-12">
              <form v-on:submit="sendNewFood">
                <b-form-group
                  id="input-group-1"
                  label="Nombre de Alimento"
                  label-for="input-1"
                >
                <b-form-input
                  id="input-1"
                  v-model="newFood.name"
                  type="text"
                  required
                  placeholder="Nombre"
                ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Descripcion:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="newFood.expireDate"
                    type="date"
                    required
                    placeholder=""
                  ></b-form-input>
                </b-form-group>
                <span>
                  <b-button
                    type="submit"
                    variant="primary"

                    >Agregar
                  </b-button>
                </span>
              </form>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-12">
              <b-table striped hover :items="food" :fields="fields" @row-clicked="prueba">
              </b-table>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script src="./food.js"></script>
<style scoped src="./food.css"></style>
