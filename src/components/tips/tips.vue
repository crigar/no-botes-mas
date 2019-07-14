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
              <img v-if="food == 'carne'" src="./../../assets/images/carne.jpg" alt="">
              <img v-if="food == 'frutas'" src="./../../assets/images/frutas.jpg" alt="">
            </div>

          </div>
          <hr class="divider my-4">
          <div class="row">
            <div class="col-md-4" v-for="tip in tips">
              <b-card
                no-body
                style="max-width: 20rem;"
                img-src=""
                img-alt="Image"
                img-top

              >
                <h4 slot="header">{{tip.name}}</h4>

                <b-card-body>
                  <b-card-title>{{tip.entity.name}}</b-card-title>
                  <b-card-sub-title class="mb-2">{{tip.entity.address}}</b-card-sub-title>
                  <b-card-text>
                    {{tip.description}}
                  </b-card-text>
                </b-card-body>


                <!--  -->
              </b-card>
            </div>
          </div>

        </div>
      </section>

    </div>
</template>
<script src="./tips.js"></script>
<style scoped src="./tips.css"></style>
