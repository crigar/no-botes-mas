import Service from '@/service.js';
export default {
  data: function(){
    return {
      user: Service.getUser(),
      newFood: {},
      fields: {
        'name': {
          label: 'Alimento',
        },
        'expireDate': {
          label: 'Fecha de vencimiento',
        },
        'description': {
          label: 'Descripcion',
        },
        'delete': {
          label: 'Eliminar',
        },
      },
    }
  },
  methods: {
    sendNewFood: function(){
      Service.newFood(this.newFood);
      this.user = Service.getUser();
      Service.toast(this,'success', 'OK', 'Alimento agregado');
    },
    deleteFood: function( id ){
      Service.deleteFood( id );
      this.user = Service.getUser();
      console.log(id)
    },

  },
  components: {},
}
