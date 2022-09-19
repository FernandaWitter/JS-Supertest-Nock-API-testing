const app = require('../src/app-original.js')
const request = require('supertest')
const expect = require('chai').expect

describe('Response tests', () => {
    it('JSON response', () => {
        request(app)
            .get('/course')
            .end((err, res) => {
                expect(res.body.id).to.be.equal('1')
            })
    })

    it('Text response', () => {
        request(app)
            .get('/course')
            .end((err, res) => {
                expect(res.text).to.contain('1')
            })
    })

    it('Status response', () => {
        request(app)
            .get('/course')
            .end((err, res) => {
                expect(res.ok).to.be.true
            })
    })
})