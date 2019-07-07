import Data from '@/data.js';
import Service from '@/service.js';

export default {
  data: function(){
    return {
      entity: Service.getEntity(this.$route.params.id),
      request: {
        state: true,
        name: 'Solicitado',
        description: 'La entidad sabe que quieres compartir tus alimentos' ,
        tooltip: 'click para cancelar',
      },
      mouseover: undefined,
      type: this.getType()
    }
  },

  methods: {
    getType: function(){
      let string = this.$route.path.split('/');
      return string[1];
    },
    changeState: function(){
      if (this.request.state == true){
        this.request.state = false;
        this.request.name = 'Sin solicitud';
        this.request.description = 'No hay solicitud para esta entidad';
      }
      else{
        this.request.state = true;
        this.request.name = 'Solicitado';
        this.request.description = 'La entidad sabe que quieres compartir tus alimentos';
      }
    },

  },
  components: {},
}
