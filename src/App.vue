<template>
  <div id="app">
    <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
    <router-view />
  </div>
</template>
<script></script>
<style >
.background-sort{
  background-image: url("./assets/images/background.jpg");
  background-repeat: no-repeat;
  height: 600px;
}
.background-long{
  background-image: url("./assets/images/background.jpg");
  background-repeat: no-repeat;
  height: 1100px;
}
.div-opacity{
  background-color: rgba(0, 0, 0, 0.5);
}
.label-form{
  color: white;
}
.title{
  margin-bottom: 5%;
}
.div-options:hover{
  background-color: #c6e5f7;
}
.active{
  color: #508418
}
.no-active{
  color: #ab1008
}
.end-sesion{
  background: #0069d9;
}

.star-active{
  color: #efa826
}

.star-no-active{
  color: #2f2f2f
}
.nav-no-botes{
  background: #344040
}


</style>
