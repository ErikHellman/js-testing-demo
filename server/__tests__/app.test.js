/* eslint-disable indent */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

/* Think of why the second test will fail if we uncomment this and how we can fix it.
test('Test that POST creates a new message.', async () => {
    const response = await request(app).post('/').send({ message: 'Hello, World!' });
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
});
 */

test('Test that GET returns all messages.', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    const { body } = response;
    expect(body.length).toBe(0);
});
