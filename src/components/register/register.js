import Service from '@/service.js';
import Data from '@/data.js';

export default {
  name: 'register',
  data: function(){
    return {
      registerData: {},

    }
  },
  methods: {
    register: function(){
      Service.toast(this,'success', 'OK', '¡Registro exitoso!');
      let component = this;
      setTimeout(function() {
          component.$router.push('/');
      }, 1000);
    },
  },
}
