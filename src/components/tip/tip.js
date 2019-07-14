import Service from '@/service.js';
export default {
  data: function(){
    return {
      user: Service.getUser(),
      tip: {}
    }
  },
  methods: {
    sendTip: function(){
      this.tip.entity = this.user;
      Service.newTip(this.tip);
      this.$router.push({path: '/tips'});
    },
  },
  components: {},
}
