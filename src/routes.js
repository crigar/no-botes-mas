import Home from './components/home/home.vue';
import Register from './components/register/register.vue';
import Login from './components/login/login.vue';
import Index from './components/index/index.vue';
import Entity from './components/entity/entity.vue';
import Entities from './components/entities/entities.vue';
import Requests from './components/requests/requests.vue';
import Tips from './components/tips/tips.vue';
import Tip from './components/tip/tip.vue';
import Food from './components/food/food.vue';
import Records from './components/records/records.vue';

const routes = [
    { path: '/', component: Home,
      children: [
        { path: 'register', component: Register },
        { path: 'login', component: Login },
      ]
    },
    {
      path: '/index', component: Index,
      children: [
        { path: '/entities', name: '', component: Entities, props: true  },
        { path: '/restaurants', name: '', component: Entities, props: true  },
        { path: '/entities/:id', name: 'entity', component: Entity, props: true },
        { path: '/requests/:id', component: Entity, props: true },
        { path: '/requests', name: '', component: Requests },
        { path: '/tips', name: '', component: Tips },
        { path: '/tip', name: '', component: Tip },
        { path: '/food', name: '', component: Food },
        { path: '/records', name: '', component: Records },
      ]
    },
];

export default routes;
