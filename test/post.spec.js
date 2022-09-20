const app = require('../app/src/app-original.js')
const request = require('supertest')
const expect = require('chai').expect

describe('Post requests', () => {
    it('JSON response', () => {
        request(app)
            .post('/course')
            .send({ "name": "supertest" })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.name).to.be.equal('supertest')
            })
    })

    it('Form response', (done) => {
        request(app)
            .post('/course')
            .send('name=supertest')
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect(200, { 'id': 2, 'name': 'supertest' }, done)
    })
})