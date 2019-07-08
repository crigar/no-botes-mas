
export default {
  data: function(){
    return {
      loginData: {},
    }
  },
  methods: {
    login: function(){
      let component = this
      component.$router.push('/index');
      localStorage.setItem('user', JSON.stringify({type: 'restaurante'}));
      // let userExist = Service.auth(this.loginData);
      // if (userExist == true) {
      //   Service.toast(this,'success', 'OK', '¡Bienvenido!');
      // }else{
      //   Service.toast(this,'danger', 'Error', 'El usuario no existe');
      // }
    },
  },
}
