'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TravelProgrammings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      initialLatitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      initialLength: {
        allowNull: false,
        type: Sequelize.STRING
      },
      finalLatitude: {
        allowNull: false,
        type: Sequelize.STRING
      },
      finalLength: {
        allowNull: false,
        type: Sequelize.STRING
      },
      departureTime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      checkIn: {
        allowNull: false,
        type: Sequelize.STRING
      },
      exitAlertTime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nearestStation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      outputCoordinate_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      arrivalCoordinate_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      nearestStationCoordinate_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TravelProgrammings');
  }
};