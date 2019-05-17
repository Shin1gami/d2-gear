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
            name: 'page-index',
            component: load('/pages/index.js')
        },
        {
            path: '/player',
            name: 'page-player-search',
            component: load('/pages/player-search.js')
        },
        {
            path: '/player/:platform/:name',
            name: 'page-player',
            component: load('/pages/player.js')
        },
        {
            path: '*',
            name: 'error-404',
            component: load('/pages/404.js')
        }
    ]
});

const app = new Vue({router}).$mount('#app');