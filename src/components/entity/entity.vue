<template>
    <div >
      <!-- Contact Section -->
      <section class="page-section p-4" id="contact" >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Fundacion x</h2>
              <hr class="divider my-4">
              <p class="text-muted mb-5">Alimentos de interes</p>
              <div class="row">
                <div class="col-md-4" v-for="index in ['Papa','Carne','Frutas','Verduras','Principios']">
                  <b-badge variant="info">{{index}}</b-badge>
                </div>
              </div>
              <hr class="divider my-4">
            </div>
          </div>
          <div class="row text-center" v-if="type == 'requests'">
            <div class="col-md-12">
              <span class="fa-stack fa-4x" v-for="index in [1,2,3,4,5]">
                <i class="fa fa-star"
                   @mouseover="mouseover = index"
                   @mouseleave="mouseover = undefined"
                   v-bind:class="{ 'star-active': index <= mouseover }">
                </i>
              </span>
              <h4 class="service-heading">¿Has intercambiado alimentos con esta entidad?</h4>
              <p class="text-muted">
                Si has intercambiado alimentos con esta entidad por favor calificala
              </p>
            </div>
          </div>
          <div class="row text-center" v-if="type == 'entities'">
            <div class="col-md-12">
              <span class="fa-stack fa-4x div-options"
                    v-on:click="changeState()"
                    v-b-tooltip.hover title="click para cambiar">
                <i class="fas"
                   v-bind:class="{'fa-check-double active': request.state == true,
                               'fa-times-circle no-active': request.state == false  }">
                </i>
              </span>
              <h4 class="service-heading">{{request.name}}</h4>
              <p class="text-muted">
                {{request.description}}
              </p>
            </div>
          </div>
          <hr class="divider my-4">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Contacto</h2>
              <hr class="divider my-4">
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-3">

            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <span class="fa-stack fa-4x">
                    <i class="fab fa-whatsapp"></i>
                  </span>
                  <h4 class="service-heading"></h4>
                  <p class="text-muted">
                    +57 320 353 61 73
                  </p>
                </div>
                <div class="col-md-6">
                  <span class="fa-stack fa-4x">
                    <i class="far fa-envelope"></i>
                  </span>
                  <h4 class="service-heading"></h4>
                  <p class="text-muted">
                    cragarciapr@unal.edu.co
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">

            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script src="./entity.js"></script>
<style scoped src="./entity.css"></style>
