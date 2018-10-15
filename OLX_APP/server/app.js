'use strict'
// Hapi Server.

const Hapi = require('hapi');
const { selectall } = require('./controllers/user.controller');
const userRoutes = require('./routes/user.routes');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
        // console.log("Request");
        // console.log(request);
        // console.log("H");
        // console.log(h);
        return 'Hello, world!';
    }
})

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {

        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});

// server.route({
//     method: 'GET',
//     path: "/users",
//     handler: selectall
// })
server.route(userRoutes.userRoutes)

// server.route({
//     method: 'GET',
//     path: '/success',
//     handler: (request, h) => {
//         console.log("Success Page");
//         return h.file('public/success.html');
//     }
// });

const init = async () => {
    await server.register(require('inert'));
    // await server.register(userRoutes)

    server.route({
        method: 'GET',
        path: '/success',
        handler: (request, h) => {
            console.log("Success Page");
            return h.file('./public/success.html');
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();