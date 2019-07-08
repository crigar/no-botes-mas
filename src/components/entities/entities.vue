<template>
    <div >
      <!-- Services -->
      <section class="page-section p-4" id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase title">{{$parent.reference.titleEntity}}</h2>
              <hr class="divider my-4">
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4" v-for="entity in entities" v-on:click="getEntity(entity.id)" v-bind:key="entity">
              <b-card
                :title="entity.name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2 div-options"

              >
                <b-card-text>
                  {{entity.description}}
                </b-card-text>
                <span v-for="index in [1,2,3,4,5]" v-bind:key="index">
                  <p v-if="5==4">{{index}}</p>
                  <i class="fas fa-star"
                     v-bind:class="{ 'star-active': true }">
                     </i>
                </span>
              </b-card>
            </div>
          </div>
        </div>
      </section>

    </div>
</template>
<script src="./entities.js"></script>
<style scoped src="./entities.css"></style>
