const express = require('express')
const request = require('supertest')
const expect = require('chai').expect

const app = express()

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response" })
})

describe('First Test', () => {
    it('OK response', () => {
        request(app)
            .get('/first')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200)
            })
    })

    it('Mocky OK response', (done) => {
        request('https://run.mocky.io')
            .get('/v3/6d95a404-e7d1-4a91-a277-16248ff9b2b5')
            .expect(200, done)
    })
})