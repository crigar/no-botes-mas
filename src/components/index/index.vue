<template>
    <div >
      <div class="row">
        <hr class="divider my-4">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-no-botes" id="mainNav">
          <div class="container">
            <button class="navbar-toggler navbar-toggler-right"
            type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" v-on:click="navLink('index')">Servicios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" v-on:click="navLink('fundations')">Fundaciones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" v-on:click="navLink('restaurants')">Restaurantes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" v-on:click="navLink('requests')">Solicitudes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" v-on:click="navLink('tips')">Consejos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" v-on:click="navLink('records')">Historial</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" v-on:click="navLink('food')">Alimentos</a>
                </li>
                <li class="nav-item end-sesion">
                  <a class="nav-link js-scroll-trigger" v-on:click="navLink('sesion')">Cerrar Sesion</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <!-- Services -->
      <section class="page-section p-4" id="services" v-show="indexPage()">
        <hr class="divider my-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">{{user.name}}</h2>
              <h3 class="section-subheading text-muted"></h3>
            </div>
          </div>
          <hr class="divider my-4">
          <div class="row text-center" >
            <div class="col-md-12">
              <span class="fa-stack fa-4x div-options"
                    v-b-tooltip.hover title="Click para cambiar"
                    v-on:click="changeState()">
                <i class="fas"
                   v-bind:class="{'fa-check-circle active': showing.state == true,
                                  'fa-times-circle no-active': showing.state == false  }">
                </i>
              </span>
              <h4 class="service-heading">{{showing.name}}</h4>
              <p class="text-muted">
                {{showing.description}}
              </p>
            </div>
          </div>
          <hr class="divider my-4">
          <div class="row text-center">
            <div class="col-md-4 div-options" v-on:click="service('fundations')">
              <span class="fa-stack fa-4x">
                <i class="fas fa-hand-holding-heart" ></i>
              </span>
              <h4 class="service-heading">Fundaciones</h4>
              <p class="text-muted">
                Aqui encontraras las fundaciones que estan interesadas en compartir alimentos.
              </p>
            </div>
            <div class="col-md-4 div-options" v-on:click="service('restaurants')" >
              <span class="fa-stack fa-4x">
                <i class="fas fa-utensils"></i>
              </span>
              <h4 class="service-heading">Restaurantes</h4>
              <p class="text-muted">
                Algunos restaurantes con los que puedes intercambiar alimentos
              </p>
            </div>
            <div class="col-md-4 div-options" v-on:click="service('requests')">
              <span class="fa-stack fa-4x">
                <i class="fas fa-bell"></i>
              </span>
              <h4 class="service-heading" >Solicitudes <b-badge variant="success">4</b-badge></h4>
              <p class="text-muted">
                Solicitudes para intercambio de alimentos
              </p>
            </div>
            <div class="col-md-4 div-options" v-on:click="service('tips')">
              <span class="fa-stack fa-4x">
                <i class="far fa-calendar-check"></i>
              </span>
              <h4 class="service-heading">Consejos</h4>
              <p class="text-muted">Aqui puedes encontrar informacion y tips sobre como evitar desperdiciar alimentos</p>
            </div>
            <div class="col-md-4 div-options" v-on:click="service('records')">
              <span class="fa-stack fa-4x">
                <i class="far fa-newspaper"></i>
              </span>
              <h4 class="service-heading">Historial</h4>
              <p class="text-muted">Historial de entidades con las que has intercambiado alimentos</p>
            </div>
            <div class="col-md-4 div-options" v-on:click="service('food')">
              <span class="fa-stack fa-4x">
                <i class="fas fa-utensils"></i>
              </span>
              <h4 class="service-heading">Alimentos</h4>
              <p class="text-muted">
                Gestiona los alimentos que maneja tu entidad
              </p>
            </div>
          </div>
        </div>
      </section>
      <router-view ></router-view>
    </div>
</template>
<script src="./index.js"></script>
<style scoped src="./index.css"></style>
