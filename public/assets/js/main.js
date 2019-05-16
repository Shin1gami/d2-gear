function load(path) {
    return () => {
        return import(path).then(module => {
            return module.default;
        });
    };
}

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: load('/pages/index.js')
        },
        {
            path: '/search',
            component: load('/pages/search.js')
        },
        {
            path: '/search/:name',
            component: load('/pages/search.js')
        },
        {
            path: '/player',
            component: load('/pages/player.js')
        },
        {
            path: '*',
            component: load('/pages/404.js')
        }
    ]
});

const app = new Vue({router}).$mount('#app');