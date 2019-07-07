
export default {
  data: function(){
    return {
      newFood: {},
      fields: {
        'name': {
          label: 'Alimento',
        },
        'expireDate': {
          label: 'Fecha de vencimiento',
        },
      },
      food: [
        {name: 'asdf', expireDate: 'aasdfsfda'},
        {name: 'asdf', expireDate: 'aasdfsfda'}
      ],
    }
  },
  methods: {
    sendNewFood: function(){
      console.log(this.newFood)
    },
    prueba: function(){
      console.log('entro')
    },
  },
  components: {},
}
