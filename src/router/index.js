import Vue from 'vue';
import Router from 'vue-router';
import login from 'components/login/login.vue';
import user from 'components/user/user.vue';
import daily from 'components/daily/daily.vue';
import calendar from 'components/calendar/calendar.vue';
import self from 'components/self/self.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      children: [
        {path: 'daily', name: 'daily', component: daily},
        {path: 'calendar', name: 'calendar', component: calendar},
        {path: 'self', name: 'self', component: self}
      ]


    }
  ]
});
