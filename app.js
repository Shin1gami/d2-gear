const autoLoad = require('fastify-autoload');
const path = require('path');

module.exports = function (fastify, opts, next) {

    fastify.register(require('fastify-static'), {
        root: path.join(__dirname, 'public'),
        prefix: '/'
    });

    fastify.register(autoLoad, {
        dir: path.join(__dirname, 'rest/services'),
        options: Object.assign({prefix: '/api'}, opts)
    });

    fastify.register(require('point-of-view'), {
        engine: {
            ejs: require('ejs')
        },
        templates: 'templates',
        options: {}
    });

    fastify.decorate('api', require('./api/methods'));

    fastify.get('/', async (request, reply) => {
        reply.view('index.ejs');
    });

    next();

};

//cls;npm run dev