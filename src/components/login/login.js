import Data from '@/data.js';
import Service from '@/service.js';
export default {
  data: function(){
    return {
      loginData: {},
    }
  },
  methods: {
    login: function(){
      let component = this;
      let response = Service.auth(this.loginData);
      if (response.success == true) {
        Service.setUser(response.user);
        component.$router.push('/index');
      }else{
        Service.toast(this,'danger', 'Error', 'El usuario no existe o el usuario y contraseña son erroneos');
      }
    },
  },
}
