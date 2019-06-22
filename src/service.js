import Data from '@/data.js';
export default {
  auth: function( data ){
    for (let user of Data.users) {
      if (user.username == data.username && user.pass == data.pass ) {
        return true;
      }
    }
    return false;
  }
}
