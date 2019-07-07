import Data from '@/data.js';
import Service from '@/service.js';

export default {
  data: function(){
    return {
      entities: Service.getEntities()
    }
  },
  methods: {
    homePage: function(){
      if (this.$route.path == '/') return true;
      else return false;
    },
    getEntity: function( id ){
      this.$router.push({path: '/entities/' + id, params: {hola: 'funciona'}})
    },
  },
  components: {},
}
