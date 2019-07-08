
export default {
  data: function(){
    return {
      newFood: {},
      fields: {
        'name': {
          label: 'Entidad',
        },
        'address': {
          label: 'Dirección',
        },
        'phone': {
          label: 'Telefono',
        },
        'email': {
          label: 'Correo',
        },
        'expireDate': {
          label: 'Fecha',
        },
      },
      food: [
        {name: 'asdf', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: 'aasdfsfda'},
        {name: 'asdf', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: 'aasdfsfda'},
        {name: 'asdf', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: 'aasdfsfda'},
        {name: 'asdf', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: 'aasdfsfda'},
        {name: 'asdf', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: 'aasdfsfda'},
        {name: 'asdf', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: 'aasdfsfda'},
      ],
    }
  },
  methods: {
    sendNewFood: function(){
      //console.log(this.newFood)
    },
    entity: function(){
      //console.log(record)
    },
  },
  components: {},
}
