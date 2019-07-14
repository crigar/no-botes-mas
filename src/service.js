'use strict';
import Data from '@/data.js';
var user = {};
const params = {
  active: '',
  id: undefined,
  grade: false
}
export default {
  auth: function( data ){
    let response = {};
    for (let user of Data.fundations) {
      if (data.username == user.email && data.pass == user.password) {
        response.success = true;
        response.user = user;
        return response;
      }
    }
    for (let user of Data.restaurants) {
      if (data.username == user.email && data.pass == user.password) {
        response.success = true;
        response.user = user;
        return response;
      }
    }
    return response;
  },
  newQualification: function(entity, qualification, description){
    user.description = description;
    user.history.push(entity);
    entity.date = new Date();
    user.date = new Date();
    if ( entity.type == 'restaurante' ) {
      for (var i = 0; i < Data.restaurants.length; i++) {
        if (Data.restaurants[i].id == entity.id) {
          Data.restaurants[i].qualification = qualification;
          Data.restaurants[i].history.push(user);
        }
      }
    }else{
      for (var i = 0; i < Data.fundations.length; i++) {
        if (Data.fundations[i].id == entity.id) {
          Data.fundations[i].qualification = qualification;
          Data.fundations[i].history.push(user);
        }
      }
    }
    this.updateUser();
  },
  setUser: function( data ){
    user = data;
  },
  getParams: function(){
    return params;
  },
  setParams: function( param, value ){
    params[param] = value;
  },
  getEntity: function( ){
    if ( params.active == 'restaurants' ) {
      return this.getRestaurant(params.id);
    }else if(params.active == 'fundations'){
      return this.getFundation(params.id);
    }
  },
  toast: function(element, variant = null, title, message) {
      element.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
  },
  getUser: function(){
    return user;
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
  getFundations: function(){
    return Data.fundations;
  },
  getRestaurants: function(){
    return Data.restaurants;
  },
  getFundation: function( id ){
    for (let fundation of Data.fundations) {
      if (fundation.id == id) {
        return fundation;
      }
    }
    return undefined;
  },
  getRestaurant: function( id ){
    for (let fundation of Data.restaurants) {
      if (fundation.id == id) {
        return fundation;
      }
    }
    return undefined;
  },
  newFood: function( data ){
    data.id = user.food.length + 1;
    user.food.push(data);
    this.updateUser();
  },
  deleteFood: function( id ){
    for (var i = 0; i < user.food.length; i++) {
      if (user.food[i].id == id) {
        user.food.splice(i, 1);
      }
    }
    this.updateUser();
  },
  getTips: function(){
    return Data.tips;
  },
  newTip: function( data ){
    Data.tips.push(data);
  },
  updateUser: function(){
    if (user.type == 'restaurante') {
      for (var i = 0; i < Data.restaurants.length; i++) {
        if (Data.restaurants[i].id == user.id) {
          Data.restaurants[i] = user;
        }
      }
    }else{
      for (var i = 0; i < Data.fundations.length; i++) {
        if (Data.fundations[i].id == user.id) {
          Data.fundations[i] = user;
        }
      }
    }
  },
  newRequest: function( data, entity ){
    user.requests.done.push(data.toUser);
    if (entity.type == 'restaurante') {
      for (let restaurant of Data.restaurants) {
        if (restaurant.id == entity.id) {
          restaurant.requests.recived.push(data.toEntity);
        }
      }
    }else{
      for (let fundation of Data.fundations) {
        if (fundation.id == entity.id) {
          fundation.requests.recived.push(data.toEntity);
        }
      }
    }
    this.updateUser();
  },
}
