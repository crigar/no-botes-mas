import Data from '@/data.js';
import Service from '@/service.js';

export default {
  data: function(){
    return {
      entities: {},
      title: '',
      prueba: this.getData(),
    }
  },
  methods: {
    homePage: function(){
      if (this.$route.path == '/') return true;
      else return false;
    },
    getEntity: function( id, type ){
      this.$router.push({path: '/entities/' + id, params: {hola: 'funciona'}});
      Service.setParams('id', id );
      if (type == 'restaurante') Service.setParams('active', 'restaurants' );
      else Service.setParams('active', 'fundations' );
    },
    getData: async function(){
      let response = {}
      if (this.$route.path == '/restaurants'){
        this.title = await 'Restaurantes';
        this.entities = await Service.getRestaurants();
        Service.setParams('active', 'restaurants' );
        Service.setParams('grade', false );
      }else if(this.$route.path == '/fundations'){
        this.title = await 'Fundaciones';
        this.entities = await Service.getFundations();
        Service.setParams('active', 'fundations' );
        Service.setParams('grade', false );
      }else if(this.$route.path == '/requests'){
        this.title = await 'Solicitudes';
        this.entities = await Service.getUser().requests.recived;
        Service.setParams('grade', true );
      }
    }
  },
  components: {},
}
