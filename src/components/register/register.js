import Service from '@/service.js';
import Data from '@/data.js';

export default {
  data: function(){
    return {
      registerData: {},
    }
  },
  methods: {
    register: function(event){
      let newUser = { username: this.registerData.username, pass: this.registerData.pass };
      Data.users.push(newUser);
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
