import login from '@/components/login/login.vue'
import register from '@/components/register/register.vue'

export default {
  name: 'home',
  data: function(){
    return {
      isHome: true
    }
  },
  methods: {
    homePage: function(){
      if (this.$route.path == '/'){
        this.isHome = true;
        return true;
      } else{
        this.isHome = false;
        return false;
      }
    },
  },
  components: {login, register},
}
