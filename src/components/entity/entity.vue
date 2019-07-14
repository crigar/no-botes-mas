<template>
    <div >
      <!-- Contact Section -->
      <section class="page-section p-4" id="contact" >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0"> {{entity.name}} </h2>
              <hr class="divider my-4">
              <p class="text-muted mb-5">Alimentos de interes</p>
              <div class="row">
                <b-table striped hover :items="entity.food" :fields="fields" @row-clicked="entity">
                </b-table>

              </div>
              <hr class="divider my-4">
            </div>
          </div>
          <div class="row text-center" v-if="type == true">
            <div class="col-md-12">
              <h2 class="mt-0 ">Descripcion</h2>
              <p>{{description.value}}</p>
            </div>

            <div class="col-md-12">
              <span class="fa-stack fa-4x" v-for="index in [1,2,3,4,5]" v-bind:key="index">
                <i class="fa fa-star"
                   @mouseover="mouseover = index"
                   @mouseleave="mouseover = undefined"
                   v-on:click="qualification(index)"
                   v-bind:class="{ 'star-active': index <= mouseover || index <= entity.qualification }">
                </i>
              </span>
              <h4 class="service-heading">¿Has intercambiado alimentos con esta entidad?</h4>
              <p class="text-muted">
                Si has intercambiado alimentos con esta entidad por favor calificala
              </p>
            </div>
          </div>
          <div class="row text-center" v-if="type == false">
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
            <div class="col-md-12">
              <form v-on:submit="newRequest">
                <b-form-group
                  id="input-group-1"
                  label="Descripcion de la Solicitud"
                  label-for="input-1"
                >
                <b-form-input
                  id="input-1"
                  v-model="description.value"
                  type="text"
                  required
                  placeholder="Cuerpo de la solicitud"
                ></b-form-input>
                </b-form-group>

              </form>
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
