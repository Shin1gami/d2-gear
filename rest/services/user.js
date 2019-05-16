module.exports = async function (fastify) {

    fastify.get('/user/:name', async (request, reply) => {
        let res = await fastify.api.D2Find(request.params.name);

        reply.send(
            res.Response.map(user => {
                return {
                    id: user['membershipId'],
                    name: user['displayName'] || null,
                    pc: user['blizzardDisplayName'] || null,
                    xbox: user['xboxDisplayName'] || null,
                    psn: user['psnDisplayName'] || null
                };
            })
        );
    });

};