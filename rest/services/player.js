module.exports = async function (fastify) {

    fastify.get('/player/:platform/:name', async (request, reply) => {
        let res = await fastify.api.D2Membership(request.params.platform, request.params.name);
        let membershipId = res.Response.shift()['membershipId'];

        res = await fastify.api.D2Profile(request.params.platform, membershipId);



        reply.send(
            res
        );
    });

};