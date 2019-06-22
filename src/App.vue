<template>
  <div id="app" class="background">
    <nav>

        <!-- <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/login'>Login</router-link> -->
    </nav>
    <router-view />
  </div>
</template>
<script></script>
<style >
.background{
  background-image: url("./assets/images/background.jpg");
  background-repeat: no-repeat;
  height: 550px;
}
.div-opacity{
  background-color: rgba(0, 0, 0, 0.5);
}

.label-form{
  color: white;
}

</style>
