'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'yogi@gmail.com',
        password: 'yogi1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'faiz@gmail.com',
        password: 'faiz1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'bahtiar@gmail.com',
        password: 'bahtiar1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
