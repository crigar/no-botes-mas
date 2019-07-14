import Service from '@/service.js';

export default {
  data: function(){
    return {
      user: Service.getUser(),
      entity: Service.getEntity(),
      description: {},
      request: {
        state : false,
        name : 'Sin solicitud',
        description : 'No hay solicitud para esta entidad',
        tooltip: 'click para cancelar',
      },
      mouseover: undefined,
      type: this.getType(),
      fields: {
        'name': {
          label: 'Nombre',
        },
        'expireDate': {
          label: 'Fecha de Vencimiento',
        },
        'description': {
          label: 'Descripcion',
        },
      },
      prueba: this.init(),
    }
  },
  methods: {
    getType: function(){
      return Service.getParams().grade;
    },
    changeState: function(){
      if (this.request.state == true){
        this.request.state = false;
        this.request.name = 'Sin solicitud';
        this.request.description = 'No hay solicitud para esta entidad';
        Service.toast(this,'success', 'OK', 'Solicitud Cancelada');
      }
      else{
        this.request.state = true;
        this.request.name = 'Solicitado';
        this.request.description = 'La entidad sabe que quieres compartir tus alimentos';
        this.newRequest();
      }
    },
    newRequest: function(){
      let toEntity = Service.getUser();
      toEntity.description = this.description.value;
      let toUser = this.entity;
      toUser.description = this.description.value;
      Service.newRequest( {toEntity: toEntity, toUser: toUser}, this.entity);
      Service.toast(this,'success', 'OK', 'Solicitud Enviada');
    },
    init: function(){
      this.description = {}
      this.user =  Service.getUser()
      this.entity =  Service.getEntity()
      this.request =  {
        state : false,
        name : 'Sin solicitud',
        description : 'No hay solicitud para esta entidad',
        tooltip: 'click para cancelar',
      }
      let current = this;
      setTimeout(function(){
        let array = [];
        if (Service.getParams().grade == true) array = current.entity.requests.done
        else array = current.entity.requests.recived
        for (let request of array) {
          if (request.id == current.user.id) {
            console.log('asfd')
            current.request.state = true;
            current.request.name = 'Solicitado';
            current.request.description = 'La entidad sabe que quieres compartir tus alimentos';
            current.description.value = request.description;
          }
        }
      },1000,"JavaScript");
    },
    qualification: function(index){
      Service.newQualification( this.entity, index, this.description.value );
      this.entity = Service.getEntity();
      Service.toast(this,'success', 'OK', 'Calificacion enviada');
    }

  },
  components: {},
}
