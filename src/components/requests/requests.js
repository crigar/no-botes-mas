import Data from '@/data.js';
import Service from '@/service.js';
export default {
  data: function(){
    return {
      requests: Service.getRequests(),
    }
  },
  methods: {
    getEntity: function( id ){
      this.$router.push('/requests/' + id)
    },
  },
  components: {},
}
