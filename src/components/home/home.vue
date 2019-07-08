<template>
    <div >
      <div  v-bind:class="{ 'background-sort': isHome, 'background-long': !isHome  }" id="home">
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-no-botes" id="mainNav">
          <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#services">Servicios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#team">Equipo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#team">Registro</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr class="divider my-4">
        <!-- titulo -->
        <div class="d-flex justify-content-center login p-4">
          <p class="title">NoBotes+:</p>
          <i class="fab fa-accessible-icon"></i>
          <p class="title">Conecta tu comida con los que más lo necesitan</p>
        </div>
        <!-- login -->
        <login v-if="homePage()"></login>
        <router-view></router-view>
      </div>


      <!-- Services -->
      <section class="page-section p-4" id="services">
        <div class="container">
          <div class="row p-4">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Servicios</h2>
              <h3 class="section-subheading text-muted">
                En la aplicacion puedes encontrar los siguientes servicios
              </h3>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-hand-holding-heart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Fundaciones</h4>
              <p class="text-muted">
                Aqui puedes ver las fundaciones vinculadas a la aplicación
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-utensils fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Restaurantes</h4>
              <p class="text-muted">
                Podras ver los restaurantes vinculados a la aplicación
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="far fa-calendar-check fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Consejos</h4>
              <p class="text-muted">
                Es posible ver consejos de otras entidades para evitar el desperdicio de alimentos
              </p>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Alimentos</h4>
              <p class="text-muted">
                Podras gestionar los alimentos que maneja tu entidad
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-bell fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Solicitudes</h4>
              <p class="text-muted">
                Sabras cuando una entidad quiere contactarte
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="far fa-newspaper fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="service-heading">Historial</h4>
              <p class="text-muted">
                Veras un historial de entidades con las que has intercambiado
                alimentos
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team -->
      <section class="bg-light page-section p-4" id="team">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase">Equipo de trabajo</h2>
              <h3 class="section-subheading text-muted">Los integrantes del equipo son</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/1.jpg" alt="">
                <h4>Maria Gaviria</h4>
                <!-- <p class="text-muted">Lead Designer</p> -->
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/2.jpg" alt="">
                <h4>Cristian Garcia</h4>
                <!-- <p class="text-muted">Lead Marketer</p> -->
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/3.jpg" alt="">
                <h4>Paula Gonzalez</h4>
                <!-- <p class="text-muted">Lead Developer</p> -->
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/1.jpg" alt="">
                <h4>Cristian Cristancho</h4>
                <!-- <p class="text-muted">Lead Designer</p> -->
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="img/team/2.jpg" alt="">
                <h4>Julian Baron</h4>
                <!-- <p class="text-muted">Lead Marketer</p> -->
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">

            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">Universidad Nacional de Colombia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script src="./home.js"></script>
<style scoped src="./home.css"></style>
