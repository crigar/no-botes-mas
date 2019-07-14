import Service from '@/service.js';
export default {
  data: function(){
    return {
      tips: Service.getTips(),
      food: {},
      data: {}
    }
  },
  methods: {

  },
  components: {},
}
