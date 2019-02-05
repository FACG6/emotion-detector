const tape = require('tape');
const supertest = require('supertest');
const router = require('./../src/router.js')

tape('testing tape', t => {
    t.equal(1, 1);
    t.end();
})
tape('testing handleHomePage, handleServerError', t => {
    supertest(router)
    .get('/')
    .expect(200)
    .expect('content-type', 'text/html')
    .end((err, res) => {
        t.error('Error: ' + err);
    });
    supertest(router)
    .get('/public/not-existing-file.ext')
    .expect(500)
    .expect('content-type', 'text/html')
    .end((err, res) => {
        t.error('Error: ' + err);
    });
    t.end();
})