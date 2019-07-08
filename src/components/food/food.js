
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
        {name: 'Carne', expireDate: '08/09/2019'},
        {name: 'Frutas', expireDate: '09/02/2019'},
        {name: 'Verduras', expireDate: '10/02/2019'},
        {name: 'Granos', expireDate: '10/15/2019'},
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
