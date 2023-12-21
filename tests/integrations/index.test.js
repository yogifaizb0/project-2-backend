const { app } = require('../../index')
const request = require('supertest')


describe('integration testing', () => {
    let movieId, token, email, userId
    describe('/POST register', () => {
        let uniqueEmail

        beforeEach(() => {
            uniqueEmail = `doee+${Date.now()}@gmail.com`
        })
        describe('positive case', () => {
            test('should return object (id, email) with status 201', (done) => {
                request(app)
                .post('/register')
                .send({
                    email: uniqueEmail,
                    password: 'doee1234'
                })
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(201)

                    email = res.body.data.email
                    userId = res.body.data.id
                    
                    expect(res.body.data).toHaveProperty('id', expect.any(Number))
                    expect(res.body.data).toHaveProperty('email', expect.any(String))
                    done()
                })
            })
        })
        describe('negative case', () => {
            test('should send error with status 400 if input invalid', (done) => {
                request(app)
                .post('/register')
                .send({})
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(400)
                    expect(res.body).toHaveProperty('error')
                    done()
                })
            })
        })
    })
    
    describe('/POST login', () => {
        describe('positive case', () => {
            test('should send an object (id, email, token) with status 200', (done) => {
                request(app)
                .post('/login')
                .send({
                    email: email,
                    password: 'doee1234'
                })
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(200)

                    token = res.body.data.token

                    expect(res.body.data).toHaveProperty('token', expect.any(String))
                    expect(res.body.data).toHaveProperty('email', expect.any(String))
                    expect(res.body.data).toHaveProperty('id', expect.any(Number))
                    done()
                })
            })
        })
        describe('negative case', () => {
            test('should send error with status 400 if input password is incorrect', (done) => {
                request(app)
                .post('/login')
                .send({
                    email: 'doe@gmail.com',
                    password: 'doe123456'
                })
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(400)
                    expect(res.body).toHaveProperty('error')
                    done()
                })
            })
        })
    })

    describe('/POST add movie', () => {
        describe('positive case', () => {
            test('should send object (id, title, genre, director, releaseYear, userId) with status 201', () => {
                request(app)
                .post('/movies')
                .send({
                    title: 'test',
                    genre: 'test',
                    director: 'test',
                    releaseYear: 2023,
                    userId: userId,
                })
                .set({'token': token})
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(201)

                    movieId = res.body.data.id

                    expect(res.body.data).toHaveProperty('id', expect.any(Number))
                    expect(res.body.data).toHaveProperty('title', expect.any(String))
                    expect(res.body.data).toHaveProperty('genre', expect.any(String))
                    expect(res.body.data).toHaveProperty('director', expect.any(String))
                    expect(res.body.data).toHaveProperty('releaseYear', expect.any(Number))
                    expect(res.body.data).toHaveProperty('userId', expect.any(Number))
                })
                
            })
        })

        describe('negative case', () => {
            test('should send error with status 401 if no token', (done) => {
                request(app)
                .post('/movies')
                .send({
                    title: 'test',
                    genre: 'test',
                    director: 'test',
                    releaseYear: 2023,
                    userId: userId,
                })
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(401)
                    expect(res.body).toHaveProperty('error')
                    done()
                })
            })
        })
    })

    describe('/GET movie', () => {
        describe('positive case', () => {
            test('should send an object (id, title, genre, director, releaseYear, userId) with status 200', (done) => {
                request(app)
                .get('/movies')
                .set({'token': token})
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(200)
                    expect(res.body).toHaveProperty('data');
                    expect(typeof res.body.data).toBe('object');
                    expect(res.body).toHaveProperty('message', expect.any(String))
                    done()
                })
            })
        })
        describe('negative case', () => {
            test('should send error with status 401 if no token', (done) => {
                request(app)
                .get(`/movies/${movieId}`)
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(401)
                    expect(res.body).toHaveProperty('error')
                    done()
                })
            })
        })
    })
    describe('/PUT movie', () => {
        describe('positive case', () => {
            test('should update movie with status 200', (done) => {
                request(app)
                .put(`/movies/${movieId}`)
                .send({
                    genre: 'Crime',
                })
                .set({'token': token})
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(200)
                    done()
                })
            })
        })
        describe('negative case', () => {
            test('should send error with status 401 if no token', (done) => {
                request(app)
                .put(`/movies/${movieId}`)
                .send({
                    genre: 'Crime'
                })
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(401)
                    done()
                })
            })
        })
    })
    describe('/DELETE movie', () => {
        describe('positive case', () => {
            test('should delete movie with status 200', (done) => {
                request(app)
                .delete(`/movies/${movieId}`)
                .set({ 'token' : token })
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(200)
                    done()
                })
            })
        })
        describe('negative case', () => {
            test('should send error with status 401 if no token', (done) => {
                request(app)
                .delete(`/movies/${movieId}`)
                .end((err, res) => {
                    expect(err).toBe(null)
                    expect(res.status).toBe(401)
                    done()
                })
            })
        })
    })
})