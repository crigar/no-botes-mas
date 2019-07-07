<template>
    <div >
      <!-- Contact Section -->
      <section class="page-section p-4" id="contact">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Nuevo Tip</h2>
              <hr class="divider my-4">
              <p class="text-muted mb-5">
                Aqui puedes añadir nuevos Tips para evitar desperdicios de alimentos
                o posibles acciones
              </p>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-12">
              <form v-on:submit="tip">
                <b-form-group
                  id="input-group-1"
                  label="Tipo de Alimento"
                  label-for="input-1"
                >
                  <b-form-select
                    id="input-1"
                    required
                    v-model="tip.food"
                  >
                    <option value="restaurante" selected="true">Carne</option>
                    <option value="fundacion">Frutas</option>
                  </b-form-select>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Descripcion:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="tip.description"
                    type="text"
                    required
                    placeholder="Description"
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
          <hr class="divider my-4">

        </div>
      </section>
    </div>
</template>
<script src="./tip.js"></script>
<style scoped src="./tip.css"></style>
