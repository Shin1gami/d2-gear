module.exports = async function (fastify) {

    fastify.get('/player/:platform/:name', async (request, reply) => {
        let platform = request.params.platform;
        let name = request.params.name;

        let res = await fastify.api.D2Membership(platform, name);
        if (res.status === 200) {
            let id = res.data.shift().membershipId;
            res = await fastify.api.D2Profile(platform, id, '100,200,102,103,201,205');


        }

        reply.send(res);
    });

};