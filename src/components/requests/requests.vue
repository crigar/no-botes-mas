<template>
    <div >
      <!-- Contact Section -->
      <section class="page-section p-4" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Solicitudes</h2>
              <hr class="divider my-4">
              <p class="text-muted mb-5">Solicitudes de intercambio de alimentos</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4" v-for="(request, index) in requests" v-on:click="getEntity(request.id)" >
              <i class="fas fa-hand-holding-heart p-4 fundation"></i>
              <b-card
                :title="request.name"
                img-src=""
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 div-options"

              >
                <b-card-text>
                  Descripcion de la fundacion, direccion etc
                </b-card-text>

              </b-card>
            </div>
          </div>
        </div>
      </section>

    </div>
</template>
<script src="./requests.js"></script>
<style scoped src="./requests.css"></style>
