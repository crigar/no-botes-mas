import Service from '@/service.js';
export default {
  data: function(){
    return {
      user: Service.getUser(),
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
        'date': {
          label: 'Fecha',
        },
      },
      food: [
        {name: 'Punto 26', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: '11/10/2018'},
        {name: 'Fundacion TTU', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: '22/10/2018'},
        {name: 'Fundacion ATV ', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: '11/10/2018'},
        {name: 'Las delicias', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: '11/11/2018'},
        {name: 'Fundacion V', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: '05/09/2018'},
        {name: 'La 33', address:'Cra 5B no 13A 36', phone: '3203536173', email: 'abcd@gmail.com', expireDate: '15/10/2018'},
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
