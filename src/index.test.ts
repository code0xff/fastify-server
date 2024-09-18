import Fastify from 'fastify';

describe('Fastify server', () => {
  const server = Fastify();

  beforeAll(async () => {
    server.get('/', async () => {
      return { message: 'Hello, Fastify with TypeScript!' };
    });

    await server.ready();
  });

  afterAll(() => server.close());

  test('GET / returns the correct message', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hello, Fastify with TypeScript!' });
  });
});