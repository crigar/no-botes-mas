import Service from '@/service.js';

export default {
  data: function(){
    return {
      loginData: {},
    }
  },
  methods: {
    login: function(){
      let userExist = Service.auth(this.loginData);
      if (userExist == true) {
        Service.toast('success', 'OK', '¡Bienvenido!');
      }else{
        Service.toast('danger', 'Error', 'El usuario no existe');
      }
    },

  },
}
