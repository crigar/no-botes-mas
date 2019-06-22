//import Service from '@/service.js';
import Data from '@/data.js';

export default {
  data: function(){
    return {
      registerData: {},
    }
  },
  methods: {
    register: function(){
      let newUser = { username: this.registerData.username, pass: this.registerData.pass };
      Data.users.push(newUser);
    },
  },
}
