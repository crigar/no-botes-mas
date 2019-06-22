import Service from '@/service.js';

export default {
  data: function(){
    return {
      loginData: {},
    }
  },
  methods: {
    login: function(event){
      let userExist = Service.auth(this.loginData);
      if (userExist == true) {
        this.toast('success', 'OK', '¡Bienvenido!');
      }else{
        this.toast('danger', 'Error', 'El usuario no existe');
      }
      console.log()
    },
    toast: function(variant = null, title, message) {
        this.$bvToast.toast(message, {
          title: title,
          variant: variant,
          solid: true
        })
      }
  },
}
