'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Dead Poets Society',
        genre: 'Drama',
        director: 'Peter Weir',
        releaseYear: 1989,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: 'Se7en',
        genre: 'Mystery',
        director: 'David Fincher',
        releaseYear: 1995,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: 'Whiplash',
        genre: 'Music',
        director: 'Damien Chazelle',
        releaseYear: 2014,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: 'Wolf Children',
        genre: 'Family',
        director: 'Mamoru Hosoda',
        releaseYear: 2012,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: 'Parasite',
        genre: 'Thriller',
        director: 'Bong Joon-ho',
        releaseYear: 2019,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Interstellar',
        genre: 'Science Fiction',
        director: 'Christopher Nolan',
        releaseYear: 2014,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Django Unchained',
        genre: 'Drama',
        director: 'Quentin Tarantino',
        releaseYear: 2012,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Prisoners',
        genre: 'Crime',
        director: 'Denis Villeneuve',
        releaseYear: 2013,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '12 Angry Men',
        genre: 'Drama',
        director: 'Sidney Lumet',
        releaseYear: 1957,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
