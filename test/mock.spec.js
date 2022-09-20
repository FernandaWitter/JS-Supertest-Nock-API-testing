const nock = require('nock')
const request = require('supertest')
const expect = require('chai').expect

describe('Mock response', () => {
    beforeEach('Create mock response', () => {
        nock('http://localhost:4000')
            .get('/users')
            .reply(200, {
                users: [{ "id": '1' }]
            })
    })

    it('Verify mock response', () => {
        request('http://localhost:4000')
            .get('/users')
            .end((err, res) => {
                expect(res.body.users[0].id).to.be.equal("1")
            })
    })
})