<template>
    <div >
      <!-- Contact Section -->
      <section class="page-section p-4" id="contact">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Historial</h2>
              <hr class="divider my-4">
              <p class="text-muted mb-5">
                Entidades con las que has compartido alimentos
              </p>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-12">
              <b-table striped hover :items="user.history" :fields="fields" @row-clicked="entity">
              </b-table>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script src="./records.js"></script>
<style scoped src="./records.css"></style>
