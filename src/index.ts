import Fastify from 'fastify';

const server = Fastify();

// Define a basic route
server.get('/', async () => {
    return { message: 'Hello, Fastify with TypeScript!' };
});

// Start the server
const start = async () => {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server is running at http://localhost:3000`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();