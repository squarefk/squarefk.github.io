import Vue from 'vue';
import Router from 'vue-router';

import About from '@/pages/About';
import Grades from '@/pages/Grades';
import Hobbies from '@/pages/Hobbies';
import Experiences from '@/pages/Experiences';
import Projects from '@/pages/Projects';
import Awards from '@/pages/Awards';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior: (to) => {
    if (to.hash) return { selector: to.hash };
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '/', component: About },
    { path: '/awards', component: Awards },
    { path: '/projects', component: Projects },
    { path: '/experiences', component: Experiences },
    { path: '/hobbies', component: Hobbies },
    { path: '/grades', component: Grades },
  ],
});

export default router;
