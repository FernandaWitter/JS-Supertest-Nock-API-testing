const app = require('../src/app')
const request = require('supertest')
const { query } = require('express')
const expect = require('chai').expect

describe('GET tests', () => {
    it('Route params - get course ID', () => {
        request(app)
            .get('/course/1')
            .end((err, res) => {
                expect(res.body.id).to.be.equal('1')
            })
    })

    it('Query params - get param name', (done) => {
        request(app)
            .get('/course')
            .query({ name: 'mocha' })
            .expect(200, { id: '1', name: 'mocha' }, done)
    })
})