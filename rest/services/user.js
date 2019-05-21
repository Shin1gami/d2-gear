module.exports = async function (fastify) {

    fastify.get('/user/:name', async (request, reply) => {
        let res = await fastify.api.D2Find(request.params.name);

        if (res.status === 200) {
            res.data = res.data.map(user => {
                return {
                    id: user['membershipId'],
                    name: user['displayName'] || null,
                    pc: user['blizzardDisplayName'] || null,
                    xbox: user['xboxDisplayName'] || null,
                    psn: user['psnDisplayName'] || null
                };
            }).filter(user => {
                return user.pc !== null || user.xbox !== null || user.psn !== null;
            });
        }

        reply.send(res);
    });

};