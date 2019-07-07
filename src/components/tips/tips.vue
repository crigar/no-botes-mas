<template>
    <div >
      <!-- Contact Section -->
      <section class="page-section p-4" id="contact">
        <div class="container">
          <div class="row justify-content-center title">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Tips sobre alimentos</h2>
              <hr class="divider my-4">
              <p class="text-muted mb-5">
                Aqui puedes encontrar Tips para evitar desperdicios de alimentos
                o posibles acciones, tambien puedes agregar nuevos tips para la comunidad.
              </p>
              <b-button variant="primary" to="/tip">Nuevo Tip</b-button>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-12">
              <b-form-group
                id="input-group-1"
                label="Tipo de Alimento"
                label-for="input-1"
              >
                <b-form-select
                  id="input-1"
                  required
                  placeholder="Correo electronico"
                >
                  <option value="restaurante" selected="true">Carne</option>
                  <option value="fundacion">Frutas</option>
                </b-form-select>
              </b-form-group>
            </div>
          </div>
          <hr class="divider my-4">
          <div class="row">
            <div class="col-md-4" v-for="tip in tips">
              <b-card
                no-body
                style="max-width: 20rem;"
                img-src="https://placekitten.com/380/200"
                img-alt="Image"
                img-top

              >
                <h4 slot="header">Hello World</h4>

                <b-card-body>
                  <b-card-title>Card Title</b-card-title>
                  <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                  <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </b-card-text>
                </b-card-body>

                <b-list-group flush>
                  <b-list-group-item>Cras justo odio</b-list-group-item>
                  <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                  <b-list-group-item>Vestibulum at eros</b-list-group-item>
                </b-list-group>

                <b-card-body>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </b-card-body>

                <b-card-footer>This is a footer</b-card-footer>

                <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
              </b-card>
            </div>
          </div>

        </div>
      </section>

    </div>
</template>
<script src="./tips.js"></script>
<style scoped src="./tips.css"></style>
