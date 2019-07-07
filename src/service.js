import Data from '@/data.js';

const user = JSON.parse(localStorage.getItem('user'));

export default {
  auth: function( data ){
    for (let user of Data.users) {
      if (user.username == data.username && user.pass == data.pass ) {
        return true;
      }
    }
    return false;
  },
  getEntity: function( id ){
    let user = this.getUser();
    if ( user.type == 'restaurants') {
      for (let fundation of Data.fundations) {
        if (fundation.id == id) {
          return fundation
        }
      }
    }else{
      for (let fundation of Data.restaurants) {
        if (fundation.id == id) {
          return fundation
        }
      }
    }

    return undefined;
  },
  toast: function(element, variant = null, title, message) {
      element.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
  },
  getUser: function(){
    return JSON.parse(localStorage.getItem('user'));
  },
  getEntities: function(){
    if (user.type == 'restaurante' ) {
      return Data.fundations;
    }else{
      return Data.restaurants;
    }
  },
  getRequests: function(){
    if (user.type == 'restaurante' ) {
      return Data.fundations;
    }else{
      return Data.restaurants;
    }
  },
  getReference: function(){
    let user = this.getUser();
    let response = {};
    if ( user.type == 'restaurante' ) {
      response = {
        titleEntity: 'Fundaciones',
        descriptionEntity: 'Aqui encontraras las fundaciones que estan interesadas en compartir alimentos.',
      }
    }else{
        response = {
          titleEntity: 'Restaurantes',
          descriptionEntity: 'Aqui encontraras los restaurantes que estan interesados en compartir alimentos.',
        }
    }
    return response;
  },
}
