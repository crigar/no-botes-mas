import login from '@/components/login/login.vue'
import register from '@/components/register/register.vue'
import Service from '@/service.js';
export default {
  data: function(){
    return {
      user: Service.getUser(),
      reference: Service.getReference(),
      showing: {
        state: true,
        name: 'Activo',
        description: 'Los restaurantes podran ver tu restaurante e iniciar comunicacion',
      },
      start: this.init(),
    }
  },
  methods: {
    homePage: function(){
      if (this.$route.path == '/') return true;
      else return false;
    },
    service: function( service ){
      this.$router.push('/' + service);
    },
    indexPage: function(){
      if (this.$route.path == '/index') return true;
      else return false;
    },
    changeState: function(){

      if (this.showing.state == true){
        this.showing.state = false;
        this.showing.name = 'No Activo';
        this.showing.description = 'Los restaurantes no pueden ver tu restaurante para iniciar comunicacion';
      }
      else{
        this.showing.state = true;
        this.showing.name = 'Activo';
        this.showing.description = 'Los restaurantes podran ver tu restaurante e iniciar comunicacion';
      }
    },
    navLink: function( route ){
      if (route != 'sesion')
        this.$router.push('/' + route);
      else
        this.$router.push('/');
    },
    init: function(){
      Service.toast(this,'success', 'OK', '¡Bienvenido!');
    }
  },
  components: {login, register},
}
