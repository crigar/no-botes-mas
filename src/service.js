import Data from '@/data.js';
export default {
  auth: function( data ){
    for (let user of Data.users) {
      if (user.username == data.username && user.pass == data.pass ) {
        return true;
      }
    }
    return false;
  },
  toast: function(variant = null, title, message) {
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
}
