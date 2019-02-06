const tape = require('tape');
const supertest = require('supertest');
const router = require('./../src/router.js')


tape('testing handleHomePage, handleServerError', t => {
    supertest(router)
        .get('/')
        .expect(200)
        .expect('content-type', 'text/html')
        .end((err, res) => {
            t.error(err);
        });
    supertest(router)
        .get('/public/css/style.css')
        .expect(200)
        .expect('content-type', 'text/css')
        .end((err, res) => {
            t.error(err);
        });
    supertest(router)
        .get('/public/js/dom.js')
        .expect(200)
        .expect('content-type', 'text/javascript')
        .end((err, res) => {
            t.error(err);
        });
    supertest(router)
        .get('/public/js/fetch.js')
        .expect(200)
        .expect('content-type', 'text/javascript')
        .end((err, res) => {
            t.error(err);
        });
    supertest(router)
        .get('/public/not-existing-file.ext')
        .expect(500)
        .expect('content-type', 'text/html')
        .end((err, res) => {
            if (err) {
                t.error(err);
            }
        });
    t.end();
})